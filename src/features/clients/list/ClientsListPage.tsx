import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "@/app/store";
import {clientListApi} from "../clientsSlice";
import {ClientsList} from "@/components/clients/ClientsList";
import type {ClientListItem} from "../interfaces/clientInterfaces";

/** API list item shape (from backend) */
interface ApiClientItem {
  id: number;
  first_name?: string;
  last_name?: string;
  name?: string;
  email?: string;
  company_name?: string;
  companyName?: string;
}

function toClientListItem(item: ApiClientItem): ClientListItem {
  const name =
    item.name ??
    ([item.first_name, item.last_name].filter(Boolean).join(" ") || "—");
  return {
    id: item.id,
    name,
    company_name: item.company_name,
    companyName: item.companyName ?? item.email ?? "",
  };
}

function normalizeClientList(payload: unknown): ClientListItem[] {
  if (Array.isArray(payload)) {
    return (payload as ApiClientItem[]).map(toClientListItem);
  }
  if (payload && typeof payload === "object") {
    const obj = payload as Record<string, unknown>;
    // API returns { data: { list: [...], total_records, ... } }; we store res.data
    const inner = obj.data as Record<string, unknown> | undefined;
    if (inner && Array.isArray(inner.list)) {
      return (inner.list as ApiClientItem[]).map(toClientListItem);
    }
    if (Array.isArray(obj.data)) {
      return (obj.data as ApiClientItem[]).map(toClientListItem);
    }
    if (Array.isArray(obj.list)) {
      return (obj.list as ApiClientItem[]).map(toClientListItem);
    }
    if (Array.isArray(obj.items)) {
      return (obj.items as ApiClientItem[]).map(toClientListItem);
    }
  }
  return [];
}

export const ClientsListPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {data, loading} = useSelector((state: RootState) => state.clients);

  useEffect(() => {
    dispatch(clientListApi({limit: 10, start: 0}));
  }, [dispatch]);

  const clientsData = normalizeClientList(data ?? null);

  return <ClientsList clients={clientsData} loading={loading} />;
};
