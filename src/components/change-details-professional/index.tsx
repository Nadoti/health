"use client"

import { ProfessionalProps } from "@/types/professional-type"
import { ChangeDetailsProfessionalView } from "./view"
import { useChangeDetailsProfessionalModel } from "./model";

export interface FormProfessionalProps {
  detailsProfessional: ProfessionalProps;
  closeModal: (value: boolean) => void;
}


export function ChangeDetailsProfessional({detailsProfessional, closeModal}: FormProfessionalProps) {
  const createModel = useChangeDetailsProfessionalModel({initialValueProfessional: detailsProfessional, closeModal: closeModal})

  return (
    <ChangeDetailsProfessionalView
      {...createModel}
    />
  )
}