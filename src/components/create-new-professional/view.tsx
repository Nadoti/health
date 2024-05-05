"use client"
import { Input } from "../forms/input";
import { Select } from "../forms/select";
import { Loading } from "../loading";
import { useCreateNewProfessionalModel } from "./model";

export function CreateNewProfessionalView({
  errors,
  handleSubmit,
  register,
  watch,
  registerNewProfessional,
  handleRgFormat,
  handleCpfFormat,
  handlePhoneNumber,
  handleMoneyFormat,
  handleFetchAddress,
  isSubmitting
}: ReturnType<typeof useCreateNewProfessionalModel>) {
  
  return (
    <main className="w-full">
      <header className="flex items-center justify-between mb-10 pt-4 pr-10">
        <h1 className="text-4xl text-zinc-500">Novo profissional</h1>
      </header>

      <form onSubmit={handleSubmit(registerNewProfessional)} className="animations">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-5 ">
          <div className="w-full max-w-7xl flex items-center justify-between">
            <h2 className="w-full text-3xl text-zinc-300 py-5">Informações pessoais</h2>
          </div>
          <div className="w-full max-w-7xl grid grid-cols-3 gap-5 py-6 px-4 bg-zinc-800 rounded-lg">
            <Input  label="Nome" {...register("name")} error={errors.name?.message} watchValue={watch("name")} />
            <Input  label="E-mail" {...register("email")} error={errors.email?.message} watchValue={watch("email")}/>
            <Input  label="RG" {...register("rg")} error={errors.rg?.message} watchValue={watch("rg")} onChange={handleRgFormat} maxLength={12}/>
            <Input  label="CPF"  {...register("cpf")} error={errors.cpf?.message} watchValue={watch("cpf")} onChange={handleCpfFormat} maxLength={14}/>
            <Input label="Telefone" {...register("phone")} error={errors.phone?.message} watchValue={watch("phone")} onChange={handlePhoneNumber} maxLength={15}/>
            <Input type="date" {...register("birthdate")} error={errors.birthdate?.message} watchValue={watch("birthdate")} className=""/>
            <Input label="Foto" type="file" {...register("photo")} error={errors.photo?.message && String(errors.photo.message)}/>
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-5">
          <div className="w-full max-w-7xl flex items-center justify-between">
            <h2 className="w-full text-3xl text-zinc-300 py-5">Endereço</h2>
          </div>
          <div className="w-full max-w-7xl grid grid-cols-3 gap-5 py-6 px-4 bg-zinc-800 rounded-lg">
            <Input  label="Cep" {...register("address.zipcode")} error={errors?.address?.zipcode?.message} watchValue={watch("address.zipcode")} maxLength={9} onChange={handleFetchAddress}/>
            <Input  label="Rua" {...register("address.street")} error={errors?.address?.street?.message} watchValue={watch("address.street")} />
            <Input  label="Número" {...register("address.number")} error={errors?.address?.number?.message} watchValue={watch("address.number")} />
            <Input  label="Bairro" {...register("address.district")} error={errors?.address?.district?.message} watchValue={watch("address.district")} />
            <Input  label="Cidade" {...register("address.city")} error={errors?.address?.city?.message} watchValue={watch("address.city")} />
            <Input  label="Estado" {...register("address.state")} error={errors?.address?.state?.message} watchValue={watch("address.state")} />
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-5 mb-5">
          <div className="w-full max-w-7xl flex items-center justify-between">
            <h2 className="w-full text-3xl text-zinc-300 py-5">Informações profissionais</h2>
          </div>
          <div className="w-full max-w-7xl grid grid-cols-3 gap-5 py-6 px-4 bg-zinc-800 rounded-lg">
            <Input  label="Profissão" {...register("specialty")} error={errors?.specialty?.message} watchValue={watch("specialty")}/>
            <Input  label="Tipo de registro" {...register("typeRegister")} error={errors?.typeRegister?.message} watchValue={watch("typeRegister")}/>
            <Input  label="Registro profissional" {...register("register")} error={errors?.register?.message} watchValue={watch("register")}/>
            <Input  label="Valor da consulta" {...register("consultationPrice")} error={errors?.consultationPrice?.message} watchValue={watch("consultationPrice")} onChange={handleMoneyFormat}/>

            <Input  label="Região de atendimento" {...register("serviceRegion")} error={errors?.serviceRegion?.message} watchValue={watch("serviceRegion")}/>
            <Select label="Opção de atendimento" {...register("serviceType")} error={errors?.serviceType?.message} watchValue={watch("serviceType")} options={[{label: "Presencial", value: "Presencial"}, {label: "Consulta online", value: "Consulta online"}]}/>
          </div>
          
        </div>
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-5">
          <button type="submit" className="inline-block w-max text-base font-medium bg-gradient-primary py-2 px-6 rounded-lg transition-all hover:scale-105">Cadastrar</button>
        </div>
      </form>
      {isSubmitting && <Loading /> }
    </main>
  )
}