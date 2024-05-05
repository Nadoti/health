
export function formatRg(document: string) {
  let rg = document;
  if (rg.length > 9) {
    rg = rg.substring(0, 9);
  }
  return rg = rg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
}

export function formatCpf(document: string) {
  let cpf = document
  if (cpf.length > 11) {
    cpf = cpf.substring(0, 11);
  }
  return cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

export function formatPhone(document: string) {
  let phone = document
  if (phone.length > 2) {
    phone = phone.replace(/(\d{2})/, '($1) '); 
  }

  if (phone.length > 14) { 
    phone = phone.substring(0, 14); 
  }
  return phone = phone.replace(/(\d{5})(\d{4})/, '$1-$2');
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price / 100);
}

// export function formatDocument(document: string) {
//   if(document?.length === 11) {
//     return document.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

//   }
//   if(document?.length === 9) {
//     return document.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
//   }
// }

// export function formatPhone(phone: string) {
//   if(phone?.length === 11) {
//     return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
//   }
// }



// export function formatCep(cep: string) {
//   if(cep?.length === 8) {
//     return cep.replace(/(\d{5})(\d{3})/, '$1-$2'); 
//   } 
// }