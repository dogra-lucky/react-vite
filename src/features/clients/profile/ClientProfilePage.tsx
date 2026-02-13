import { ClientProfile } from "@/components/clients/ClientProfile";
import { clientDetailsApi } from "../clientsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import { useParams } from "react-router-dom";
export const ClientProfilePage = () => {
  const {id} = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const {data,loading} = useSelector((state:RootState)=>state.clients);
  useEffect(()=>{
    dispatch(clientDetailsApi(Number(id)));
  },[id,dispatch]);
  if (loading) return <div>Loading...</div>;
  if (!data) return <div>Client not found</div>;
  return <ClientProfile client={data} isLoading={false} />;
};