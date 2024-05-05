import { v2 as cloudinary } from "cloudinary"
import { CreateNewProfessional } from "@/components/create-new-professional"

cloudinary.config({
  cloud_name: "djhtbzn8z",
  api_key: "494834351148936",
  api_secret: "opH5ikSTiYnV8BipOfbtXtqSBoI"
})

export default async function NewProfessional() {
  
  return (
    <CreateNewProfessional />
  )
}