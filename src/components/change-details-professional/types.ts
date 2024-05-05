import { z } from "zod";
import { changeDetailsProfessionalSchema } from "./changeDetailsProfessionalSchema";

export type ChangeDetailsProfessionalProps = z.infer<typeof changeDetailsProfessionalSchema>

// export interface FormChangeDetailsProfessional {
//   name: string,
//   typeRegister: string,
//   register: string,
//   consultationPrice: string,
//   serviceRegion: string,
//   serviceType: string,
//   photo: string;
// }

export interface PatchProfessionalDetailsProps {
  id: string;
  form: ChangeDetailsProfessionalProps
}