import {api} from "@/services/axois";

export const loginApi = (data: any) => api.post("/login", data);
