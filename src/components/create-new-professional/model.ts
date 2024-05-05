import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreateNewProfessionalProps } from "./types";
import { formatCpf, formatPhone, formatPrice, formatRg } from "@/utils/format-info";
import { ChangeEvent } from "react";
import axios from "axios"
import { notification } from "@/utils/notification";
import { useRouter } from 'next/navigation'
import { createNewProfessionalSchema } from "./createNewProfessionalSchema";
import { getAllProfessional } from "@/services/get-all-professional";
import { postCreateNewProfessional } from "@/services/post-create-new-professional";


export function useCreateNewProfessionalModel() {
  const router = useRouter()
  const { handleSubmit, register, formState: {errors, isLoading, isSubmitting}, watch, setValue, setError,} = useForm<CreateNewProfessionalProps>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(createNewProfessionalSchema),
  })


  async function registerNewProfessional(form: CreateNewProfessionalProps) {
    if(!form.email && !form.phone) {
      setError("email", {
        type: "manual",
        message: "Informe um email ou telefone"
      })
      setError("phone", {
        type: "manual",
        message: "Informe um email ou telefone"
      })
      return
    }
    const allProfessionalData = await getAllProfessional()
    const ifCpfExist = allProfessionalData.some((professional) => professional.cpf === form.cpf )
    if(ifCpfExist) {
      notification("error", "CPF já cadastrado")
      setError("cpf", {
        type: "manual",
        message: "CPF já cadastrado"
      })
      return
    }
    const formData = new FormData()
    formData.append('file', form.photo[0]);
    formData.append('upload_preset', 'bzwvqgwr')
    const uploudImage = await axios.post('https://api.cloudinary.com/v1_1/djhtbzn8z/image/upload',formData);
    form.photo = uploudImage.data?.url
    const response = await postCreateNewProfessional(form)
    if(response.status === 201 || response.status === 200) {
      notification("success", "Profissional criado com sucesso!")
      router.push("/all-professional")
    }
  }

  function handleRgFormat(event: ChangeEvent<HTMLInputElement>) {
    const document = event.target.value.replace(/\D/g, '');
    const rg = formatRg(document);
    setValue('rg', rg || '');
  };
  
  function handleCpfFormat(event: ChangeEvent<HTMLInputElement>) {
    const document = event.target.value.replace(/\D/g, '');
    const cpf = formatCpf(document);
    setValue('cpf', cpf || '');
  };
  

  function handlePhoneNumber(event: ChangeEvent<HTMLInputElement>) {
    const document = event.target.value.replace(/\D/g, '')
    const phone = formatPhone(document)
    setValue('phone', phone || '');
  };

  function handleMoneyFormat(event: ChangeEvent<HTMLInputElement>) {
    const document = event.target.value.replace(/\D/g, '')
    const price = formatPrice(parseInt(document))
    setValue("consultationPrice", price || '')
  }

  async function handleFetchAddress(event: ChangeEvent<HTMLInputElement>) {
    const zipcodeFormatted = event.target.value.replace(/\D/g, '')
    if(zipcodeFormatted.length === 8) {
      const { data } = await axios.get(`https://viacep.com.br/ws/${zipcodeFormatted}/json/`)
      if(data?.erro) {
        notification("error","Cep incorreto, informe um novo")
        setValue("address.zipcode", "")
        return
      } else {
        setValue("address.zipcode", data.cep)
        setValue("address.street", data.logradouro)
        setValue("address.district", data.bairro)
        setValue("address.city", data.localidade)
        setValue("address.state", data.uf)
        return
      }
    }
    setValue("address.zipcode", event.target.value)
  }
  return { handleSubmit, register, errors, watch, registerNewProfessional, handleRgFormat, handleCpfFormat, handlePhoneNumber,handleMoneyFormat, handleFetchAddress, isSubmitting}
}