import { api } from "./axios";



export async function deleteProfessional(id: string) {
  
  const data = await api.delete(`/professional/${id}`)
  return data
}