import type { ClientListItem } from "@/features/clients/interfaces/clientInterfaces";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
interface ClientCardProps {
  client: ClientListItem;
}

export const ClientCard = ({ client }: ClientCardProps) => {
  const navigate = useNavigate();
  const companyName =
    client.companyName ?? client.company_name ?? "";
  const handleViewClient = (id: number) => {
    console.log("======id===", id);
    navigate(`/clients/${id}`);
  };
  return (
    <tr>
      <td>#{client.id}</td>
      <td>{client.name}</td>
      <td>{companyName}</td>
      <td>
        <Button variant="primary" onClick={() => handleViewClient(client.id)}>View</Button>
      </td>
    </tr>
  );
};
