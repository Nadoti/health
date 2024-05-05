"use client"
import { Input } from "@/components/forms/input"
import Link from "next/link"
import { CldImage } from "next-cloudinary"
import { ProfessionalProps } from "@/types/professional-type"
import { useShowDetailsProfessional } from "./model"
import { Modal } from "../modal"
import { ChangeDetailsProfessional } from "../change-details-professional"


export function ShowDetailsProfessionalView({ 
  changeBlockProfessional,
  deleteTheProfessional,
  isDeleteProfessional,
  detailsProfessional,
  isChangeDetailsProfessional, 
  setIsChangeDetailsProfessional,
  setIsDeleteProfessional
}: ReturnType<typeof useShowDetailsProfessional> & { detailsProfessional: ProfessionalProps }) {

  

  return (
    <section className="w-full ">
      <header className="w-full max-w-7xl mx-auto pt-10">
        <Link href="/all-professional" className="w-max flex items-center gap-1 text-base font-medium text-zinc-800 py-2 px-2 bg-gradient-primary rounded-md transition-all hover:gap-3">  {"<-"}
        <span>Voltar</span>  
        </Link>
      </header>
      <div className="w-full flex flex-col items-center justify-center relative pt-10 pr-10 animations">
        <CldImage src={detailsProfessional?.photo} width={100} height={100} className="w-40 h-40 rounded-[50%]" alt="avatar"/>
        <div className="w-full max-w-7xl flex items-center justify-between">
          <h2 className="w-full text-3xl text-zinc-300 py-5">Informações Pessoais</h2>
          <div className="flex items-center gap-5">
            <button onClick={() => setIsChangeDetailsProfessional(true)} className="text-base font-medium text-zinc-100 py-2 px-6 bg-zinc-400 rounded-md transition-all hover:scale-105">Editar</button>
      
            <button onClick={() => changeBlockProfessional(detailsProfessional.id, detailsProfessional.blocked)} className="text-base font-medium text-zinc-100 py-2 px-6 bg-zinc-600 rounded-md transition-all hover:scale-105">{
              detailsProfessional?.blocked ? "Desbloquear" : "Bloquear"
            }</button>
            
            <button onClick={() => setIsDeleteProfessional(true)} className="text-base font-medium text-zinc-100 py-2 px-6 bg-red-400 rounded-md transition-all hover:scale-105">Excluir</button>
          </div>
        </div>
        <div className="w-full max-w-7xl grid grid-cols-3 gap-5 py-6 px-4 bg-zinc-800 rounded-lg">
          <Input value={detailsProfessional?.name} label="Nome" disabled/>
          <Input value={detailsProfessional?.email} label="E-mail" disabled/>
          <Input value={detailsProfessional?.rg} label="RG" disabled/>
          <Input value={detailsProfessional?.cpf} label="CPF" disabled/>
          <Input value={detailsProfessional?.phone} label="Telefone" disabled/>
          <Input value={detailsProfessional?.birthdate} label="Data de nascimento" disabled/>
        </div>
        <div className="w-full max-w-7xl flex items-center justify-between">
          <h2 className="w-full text-3xl text-zinc-300 py-5">Endereço</h2>
        </div>
        <div className="w-full max-w-7xl grid grid-cols-3 gap-5 py-6 px-4 bg-zinc-800 rounded-lg">
          <Input value={detailsProfessional?.address.street} label="Rua" disabled/>
          <Input value={detailsProfessional?.address.number} label="Número" disabled/>
          <Input value={detailsProfessional?.address.zipcode} label="Cep" disabled/>
          <Input value={detailsProfessional?.address.district} label="Bairro" disabled/>
          <Input value={detailsProfessional?.address.city} label="Cidade" disabled/>
          <Input value={detailsProfessional?.address.state} label="Estado" disabled/>
        </div>
        <div className="w-full max-w-7xl flex items-center justify-between">
          <h2 className="w-full text-3xl text-zinc-300 py-5">Informações profissionais</h2>
        </div>
        <div className="w-full max-w-7xl grid grid-cols-3 gap-5 py-6 px-4 bg-zinc-800 rounded-lg">
          <Input value={detailsProfessional?.specialty} label="Profissão" disabled/>
          <Input value={detailsProfessional?.typeRegister} label="Tipo de registro" disabled/>
          <Input value={detailsProfessional?.register} label="Registro profissional" disabled/>
          <Input value={detailsProfessional?.consultationPrice}  label="Valor da consulta" disabled/>
          <Input value={detailsProfessional?.serviceRegion} label="Região de atendimento" disabled/>
          <Input value={detailsProfessional?.serviceType} label="Opção de atendimento" disabled/>
        </div>
      </div>

      {isDeleteProfessional && (
        <Modal.Root>
          <Modal.Header>Tem certeza que deseja excluir o profissional ?</Modal.Header>
          <Modal.Action>
            <button onClick={() => deleteTheProfessional(detailsProfessional?.id)} className="text-base font-medium text-zinc-100 py-2 px-6 bg-red-400 rounded-md transition-all hover:scale-105">Excluir</button>
            <button onClick={() => setIsDeleteProfessional(false)} className="text-base font-medium text-zinc-100 py-2 px-6 bg-zinc-400 rounded-md transition-all hover:scale-105">Cancelar</button>
          </Modal.Action>
        </Modal.Root>
      )}

      {isChangeDetailsProfessional && (
        <Modal.Root>
          <Modal.Close closeModal={() => setIsChangeDetailsProfessional(false)}/>
          <Modal.Header>Editar profissional</Modal.Header>
          <Modal.Body>
            <ChangeDetailsProfessional detailsProfessional={detailsProfessional} closeModal={setIsChangeDetailsProfessional}/>
          </Modal.Body>
        </Modal.Root>
      )}

    </section>
  )
}