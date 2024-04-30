"use client"
import { useInformationProfessional } from "@/store/detailProfessional"

export default function ProfissionalDetails() {
  const { professional } = useInformationProfessional()
  console.log("VENDO O PROFESSIONAL", professional)
  return (
    <div className="text-white">
      OLA
    </div>
  )
}