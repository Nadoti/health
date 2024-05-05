import { getAllProfessional } from "@/services/get-all-professional"
import { ListAllProfessionalBlocked } from "@/components/list-all-professional-blocked"

export default async function BlockProfessional() {
  const data = await getAllProfessional()

  return (
    <ListAllProfessionalBlocked listAllProfessional={data} />
  )
}