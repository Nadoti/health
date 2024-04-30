"use client"
import Link from "next/link"
import avatar from "../../../public/mohamed-nohassi--0xMiYQmk8g-unsplash.jpg"
import Image from "next/image"
import { useInformationProfessional } from "@/store/detailProfessional"

const profissionals = [
  {
    name: "Douglas",
    specialty: "Dentista",
    typeRegister: "CRO",
    register: "87677",
    consultationPrice: 200,
    serviceRegion: "Itaim Bibi",
    serviceOption: ["presencial", "consulta online"],
    email: "dodo_nadoti@hotmail.com",
    phone: "11968382265",
    cpf: "00000000000",
    rg: "111111111",
    birthdate: "11/05/1996",
    avatar: avatar,
    address: {
      street: "rua angelina gazeta romanini",
      zipcode: "03266170",
      city: "são paulo",
      number: "79",
      district: "parque residencial oratório",
      state: "SP",
    }
  }
]

export function ListAllProfessionals() {
  const { takeDetailsProfessional } = useInformationProfessional()
  function handleDetailProfessional(information) {
    takeDetailsProfessional(information)
  }

  return (
    <section className="w-full">

      <header className="flex items-center justify-between mb-10 pt-4 pr-10">
        <h1 className="text-4xl text-zinc-500">Profissionais</h1>
        <button className="text-base font-medium py-2 px-6 bg-gradient-primary rounded-md transition-all hover:scale-105">Novo Profissional</button>
      </header>

      <div className="w-full flex gap-5">
        {profissionals.map((user) => (
          <Link href={`/all-professional/${user.cpf}`} key={user.cpf} onClick={() => handleDetailProfessional(user)} className="w-full max-w-[300px] flex flex-col items-center gap-2 py-6 px-2 bg-gradient-primary rounded-md cursor-pointer transition-all hover:scale-105">
            <Image src={user.avatar} className="w-20 h-20 rounded-[50%]" alt="avatar"/>
            <div className="w-full flex flex-col items-center gap-4">
              <p className="w-full break-words text-gray-800 font-medium text-center">{user.name}</p>
              <p className="w-full break-words text-gray-800 font-medium text-center">{user.specialty}</p>
              <span className="flex gap-2 text-gray-500 font-medium">Atendimento: <p className="w-full text-gray-800">{user.serviceRegion}</p></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}