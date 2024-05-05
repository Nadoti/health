
export interface ProfessionalProps {
  id: string;
  name: string;
  email: string;
  rg: string;
  cpf: string;
  phone: string;
  birthdate: string;
  photo: string;
  specialty: string;
  typeRegister: string;
  consultationPrice: string;
  register: string;
  serviceRegion: string;
  serviceType: string;
  blocked: boolean;
  address: {
    zipcode: string;
    street: string;
    number: string;
    district: string;
    city: string;
    state: string;
  }
}