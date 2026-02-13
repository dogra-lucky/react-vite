import  {api} from "@/services/axois"
import {type paginationInterface } from "./interfaces/clientInterfaces"
export const clientListRoute = (payload:paginationInterface)=>api.post("/v1/client/list",payload)

export const clientProfileRoute = (id:number) => api.get(`v1/client/detail/${id}`)