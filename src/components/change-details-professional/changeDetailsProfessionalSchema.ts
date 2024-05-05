import { z } from "zod";

const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const MAX_FILE_SIZE = 1024 * 1024 * 5;

export const changeDetailsProfessionalSchema = z.object({
  name: z
    .string()
    .min(1, "Campo obrigatório."),
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
  .optional()
  .refine((files) => {
    if (files && files.length > 0) {
      return files[0].size <= MAX_FILE_SIZE;
    }
    return true;
  }, "Imagem com tamanho máximo de 5MB")
  .refine((files) => {
    if (files.length > 0) {
      return ACCEPTED_IMAGE_MIME_TYPES.includes(files[0].type);
    }
    return true;
  }, "Apenas .jpg, .jpeg, .png e .webp são suportados.")
})