import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ChangeDetailsProfessionalProps } from "./types";
import { formatPrice  } from "@/utils/format-info";
import { ChangeEvent, useEffect } from "react";
import axios from "axios"
import { notification } from "@/utils/notification";
import { usePathname, useRouter } from 'next/navigation'
import { changeDetailsProfessionalSchema } from "./changeDetailsProfessionalSchema";
import { ProfessionalProps } from "@/types/professional-type";
import { patchProfessionalDetails } from "@/services/patch-professional-details";

interface UseFormProfessionalModelProps {
  initialValueProfessional: ProfessionalProps | null
  closeModal: (value: boolean) => void;
}

export function useChangeDetailsProfessionalModel({initialValueProfessional, closeModal}: UseFormProfessionalModelProps) {
  const pathname = usePathname()
  const router = useRouter()
  
  const { handleSubmit, register, formState: {errors, isSubmitting}, watch, setValue} = useForm<ChangeDetailsProfessionalProps>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(changeDetailsProfessionalSchema),
    defaultValues: {
      name: initialValueProfessional?.name ? initialValueProfessional?.name : "",
      typeRegister: initialValueProfessional?.typeRegister ? initialValueProfessional?.typeRegister : "",
      register: initialValueProfessional?.register ? initialValueProfessional?.register : "",
      consultationPrice: initialValueProfessional?.consultationPrice ? initialValueProfessional?.consultationPrice : "",
      serviceRegion: initialValueProfessional?.serviceRegion ? initialValueProfessional?.serviceRegion : "",
      serviceType: initialValueProfessional?.serviceType ? initialValueProfessional?.serviceType : "",
    }
  })

  async function changeDetailsProfessional(form:ChangeDetailsProfessionalProps) {
    const id = pathname.split("/")[2]
    const formData = new FormData()
    if(form.photo.length > 0) {
      formData.append('file', form.photo[0]);
      formData.append('upload_preset', 'bzwvqgwr')
      const uploudImage = await axios.post('https://api.cloudinary.com/v1_1/djhtbzn8z/image/upload',formData);
      form.photo = uploudImage.data?.url
    }
    if(form.photo.length === 0) {
      delete form.photo
    }
    const response = await patchProfessionalDetails({id, form})
    if(response.status === 201 || response.status === 200) {
      notification("success", "Profissional editado com sucesso!")
      closeModal(false)
      router.refresh()
    }
  }

  function handleMoneyFormat(event: ChangeEvent<HTMLInputElement>) {
    const document = event.target.value.replace(/\D/g, '')
    const price = formatPrice(parseInt(document))
    setValue("consultationPrice", price || '')
  }

  
  return { handleSubmit, register, errors, watch, changeDetailsProfessional,handleMoneyFormat, isSubmitting}
}