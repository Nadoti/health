import { getAllProfessional } from "@/services/get-all-professional"
import { ListAllProfessional } from "@/components/list-all-professional"

export default async function AllProfessional() {
  const data = await getAllProfessional()
  return (
    <>
      <ListAllProfessional listAllProfessional={data}/>
    </>
  )
}