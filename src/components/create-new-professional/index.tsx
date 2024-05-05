"use client"

import { ProfessionalProps } from "@/types/professional-type"
import { useCreateNewProfessionalModel } from "./model"
import { CreateNewProfessionalView } from "./view";



export function CreateNewProfessional() {
  const createModel = useCreateNewProfessionalModel()

  return (
    <CreateNewProfessionalView
      {...createModel}
    />
  )
}