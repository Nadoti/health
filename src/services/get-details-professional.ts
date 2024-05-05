import { api } from "./axios";



export async function getDetailsProfessional(id: string) {
  
  const data = await api.get(`/professional/${id}`)
  
  return data.data
}