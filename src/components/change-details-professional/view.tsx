"use client"
import { Input } from "../forms/input";
import { Select } from "../forms/select";
import { Loading } from "../loading";
import { useChangeDetailsProfessionalModel } from "./model";

export function ChangeDetailsProfessionalView({
  errors,
  handleSubmit,
  register,
  watch,
  changeDetailsProfessional,
  handleMoneyFormat,
  isSubmitting
}: ReturnType<typeof useChangeDetailsProfessionalModel>) {
  
  return (
    <main className="w-full">

      <form onSubmit={handleSubmit(changeDetailsProfessional)} className="animations">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-5 ">
          <div className="w-full max-w-7xl flex items-center justify-between">
            <h2 className="w-full text-3xl text-zinc-300 py-5">Informações pessoais</h2>
          </div>
          <div className="w-full max-w-7xl grid grid-cols-3 gap-5 py-6 px-4 bg-zinc-800 rounded-lg">
            <Input  label="Nome" {...register("name")} error={errors.name?.message} watchValue={watch("name")} />
            
            <Input label="Foto" type="file" {...register("photo")} error={errors.photo?.message && String(errors.photo.message)} required={false}/>
          </div>
        </div>
        
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-5 mb-5">
          <div className="w-full max-w-7xl flex items-center justify-between">
            <h2 className="w-full text-3xl text-zinc-300 py-5">Informações profissionais</h2>
          </div>
          <div className="w-full max-w-7xl grid grid-cols-3 gap-5 py-6 px-4 bg-zinc-800 rounded-lg">
            
            <Input  label="Tipo de registro" {...register("typeRegister")} error={errors?.typeRegister?.message} watchValue={watch("typeRegister")}/>
            <Input  label="Registro profissional" {...register("register")} error={errors?.register?.message} watchValue={watch("register")}/>
            <Input  label="Valor da consulta" {...register("consultationPrice")} error={errors?.consultationPrice?.message} watchValue={watch("consultationPrice")} onChange={handleMoneyFormat}/>
            <Input  label="Região de atendimento" {...register("serviceRegion")} error={errors?.serviceRegion?.message} watchValue={watch("serviceRegion")}/>
            <Select label="Opção de atendimento" {...register("serviceType")} error={errors?.serviceType?.message} watchValue={watch("serviceType")} options={[{label: "Presencial", value: "Presencial"}, {label: "Consulta online", value: "Consulta online"}]}/>
          </div>
          
        </div>
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-5">
          <button type="submit" className="inline-block w-max text-base font-medium bg-gradient-primary py-2 px-6 rounded-lg transition-all hover:scale-105">Editar</button>
        </div>
      </form>
      {isSubmitting && <Loading /> }
    </main>
  )
}