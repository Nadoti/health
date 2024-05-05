import { z } from "zod";

const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const MAX_FILE_SIZE = 1024 * 1024 * 5;

export const createNewProfessionalSchema = z.object({
  name: z
    .string()
    .min(1, "Campo obrigatório."),
  email: z
    .string(),
  rg: z
    .string()
    .min(12, "RG inválido."),
  cpf: z
    .string()
    .min(14, 'CPF inválido.'),
  phone: z
    .string(),
  birthdate: z
    .string()
    .min(1, "Data de nascimento inválido"),
  address: z.object({
    zipcode: z
      .string()
      .min(9, "Informe um cep válido."),
    street: z
      .string()
      .min(1, "Rua não pode ser vazio."),
    number: z
      .string()
      .min(1, "Número não pode ser vazio."),
    district: z
      .string()
      .min(1, "Bairro não pode ser vazio."),
    city: z
      .string()
      .min(1, "Cidade não pode ser vazio."),
    state: z
      .string()
      .min(1, "Estado não pode ser vazio."),
  }),
  specialty: z
    .string()
    .min(1, "Informe uma profissão."),
  typeRegister: z
    .string()
    .min(1, "Informe um tipo de registro."),
  register: z
    .string()
    .min(1, "Informe um registro profissional."),
  consultationPrice: z
    .string()
    .min(1, "Informe o valor da consulta.")
    .refine((val) => {
      const formatToNumber = Number(val.replace(/\D/g, ''));
      return formatToNumber !== 0
    }, "Digite um valor maior que 0"),
  serviceRegion: z
    .string()
    .min(1, "Informe uam região de atendimento."),
  serviceType: z
    .string()
    .refine((val) => ['Presencial', 'Consulta online'].includes(val), {
      message: 'Selecione uma das opções.',
    }),
  photo: z
    .any()
    .refine((files) => files && files.length > 0, 'Informe uma foto do profissional')
    .refine((files) => {
       return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Imagem com tamanho máximo de 5MB`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Apenas .jpg, .jpeg, .png and .webp formatos são suportados."
    ),
    blocked: z.boolean().optional().default(false),
})