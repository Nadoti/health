"use client"
import Link from "next/link"
import { CldImage } from "next-cloudinary"
import { ProfessionalProps } from "@/types/professional-type"

export function ListAllProfessional({ listAllProfessional }: {listAllProfessional: ProfessionalProps[]}) {

  
  return (
    <main className="w-full">

      <header className="flex items-center justify-between mb-10 pt-4 pr-10">
        <h1 className="text-4xl text-zinc-500">Profissionais</h1>
        <Link href="/new-professional" className="text-base font-medium py-2 px-6 bg-gradient-primary rounded-md transition-all hover:scale-105">Novo Profissional</Link>
      </header>

      <div className="w-full flex gap-5 animations">
        {listAllProfessional?.filter((user) => !user.blocked).map((user) => (
          <Link href={`/all-professional/${user.id}`} key={user.cpf}  className="w-full max-w-[300px] bg-gradient-primary p-1 rounded-md cursor-pointer transition-all hover:scale-105">
            <div className="w-full flex flex-col items-center gap-4 bg-zinc-900 rounded-md py-4 px-2">
              <CldImage src={user.photo} width={100} height={100} className="w-20 h-20 rounded-[50%]" alt="avatar"/>
              <div className="w-full flex flex-col items-center gap-4">
                <p className="w-full break-words text-gray-200 font-medium text-center">{user.name}</p>
                <p className="w-full break-words text-gray-200 font-medium text-center">{user.specialty}</p>
                <span className="flex gap-2 text-gray-400 font-medium">Atendimento: <p className="w-full text-gray-200">{user.serviceRegion}</p></span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}