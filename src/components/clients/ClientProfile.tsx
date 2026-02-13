import type {ClientDetails} from "@/features/clients/interfaces/clientInterfaces";

interface ClientProfileProps {
  client:ClientDetails,
  isLoading:boolean,
}

export const ClientProfile = ({client,isLoading}:ClientProfileProps) => {
  if(isLoading){
    return <div>Loading...</div>
  }
  return (
    <div>
      <p>
        Name : {client.first_name} {client.last_name}
      </p>
      <p>email : {client.email}</p>
      <p>phone_number : {client.phone_number}</p>
      <p>company_name : {client.first_name}</p>
    </div>
  );
};
