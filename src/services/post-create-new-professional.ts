import { api } from "./axios";
import { CreateNewProfessionalProps } from "@/components/create-new-professional/types";



export async function postCreateNewProfessional(form: CreateNewProfessionalProps) {
  
  const data = await api.post(`/professional`,form)
  return data
}