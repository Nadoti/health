import { PatchProfessionalDetailsProps } from "@/components/change-details-professional/types";
import { api } from "./axios";



export async function patchProfessionalDetails({ id, form}: PatchProfessionalDetailsProps) {
  
  const data = await api.patch(`/professional/${id}`,form)
  return data
}