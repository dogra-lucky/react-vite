import { Table } from "react-bootstrap";
import { ClientCard } from "./ClientCard";
import type { ClientListItem } from "@/features/clients/interfaces/clientInterfaces";

interface ClientsListProps {
  clients: ClientListItem[];
  loading?: boolean;
}

export const ClientsList = ({ clients, loading }: ClientsListProps) => {
  return (
    <div>
      <h1 className="mb-4" style={{ fontSize: "1.5rem", fontWeight: 600 }}>
        Clients
      </h1>

      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={3} className="text-center text-muted py-4">
                Loading…
              </td>
            </tr>
          ) : clients.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center text-muted py-4">
                No clients found
              </td>
            </tr>
          ) : (
            clients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};
