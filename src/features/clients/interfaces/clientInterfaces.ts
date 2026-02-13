export interface paginationInterface {
  limit?: number;
  search?: string;
  start?: number;
  type?: unknown;
}


export interface ClientListItem {
  id: number;
  name: string;
  company_name?: string;
  companyName?: string;
}

export interface ClientDetails{
  company_name:string;
  email:string;
  phone_number:string;
  first_name:string;
  last_name:string;
}



