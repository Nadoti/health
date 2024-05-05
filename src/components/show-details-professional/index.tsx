"use client"

import { ProfessionalProps } from "@/types/professional-type";
import { ShowDetailsProfessionalView } from "./view";
import { useShowDetailsProfessional } from "./model";




export function ShowDetailsProfessional({ detailsProfessional }: { detailsProfessional: ProfessionalProps}) {

  const showModel = useShowDetailsProfessional()

  return (
    <ShowDetailsProfessionalView {...showModel} detailsProfessional={detailsProfessional}/>
  )
}