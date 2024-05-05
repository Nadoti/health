"use client"

import { deleteProfessional } from "@/services/delete-professional"
import { patchBlockProfessional } from "@/services/patch-block-professional"
import { notification } from "@/utils/notification"
import { useRouter } from 'next/navigation'
import { useState } from "react"

export function useShowDetailsProfessional() {
  const [isDeleteProfessional, setIsDeleteProfessional] = useState(false)
  const [isChangeDetailsProfessional, setIsChangeDetailsProfessional] = useState(false)

  const router = useRouter()

  async function changeBlockProfessional(id: string, block: boolean) {
    const isBlocked = block ? false : true
    await patchBlockProfessional(id, isBlocked)
    notification("success", `${block ? "Usuário desbloqueado com sucesso" : "Usuário bloqueado com sucesso"}`)
    router.refresh()
  }

  async function deleteTheProfessional(id: string) {
    const data = await deleteProfessional(id)
    if(data.status === 200 || data.status === 201) {
      notification("success", "Profissional excluido com sucesso!")
      router.refresh()
      router.push("/all-professional")
    }
  }


  return {changeBlockProfessional, deleteTheProfessional, isDeleteProfessional, setIsDeleteProfessional, isChangeDetailsProfessional, setIsChangeDetailsProfessional}
}