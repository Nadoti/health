import { ShowDetailsProfessional } from "@/components/show-details-professional"
import { getDetailsProfessional } from "@/services/get-details-professional"
import { redirect } from 'next/navigation'


export default async function ProfissionalDetails({ params }: { params: { professionalId: string}}) {
  

  try {
    const data = await getDetailsProfessional(params.professionalId);
    return <ShowDetailsProfessional detailsProfessional={data} />;
  } catch (error) {
    redirect('/all-professional')

  }
}