import { z } from "zod";
import { createNewProfessionalSchema } from "./createNewProfessionalSchema";

export type CreateNewProfessionalProps = z.infer<typeof createNewProfessionalSchema>