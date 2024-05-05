import { AxiosResponse } from "axios";
import { api } from "./axios";
import { ProfessionalProps } from "@/types/professional-type";



export async function getAllProfessional() {
  const data: AxiosResponse<ProfessionalProps[]> = await api.get("/professional")

  return data.data
}