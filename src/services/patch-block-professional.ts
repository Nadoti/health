import { api } from "./axios";



export async function patchBlockProfessional(id: string, block: boolean) {
  
  const data = await api.patch(`/professional/${id}`, {
    blocked: block
  })
  return data
}