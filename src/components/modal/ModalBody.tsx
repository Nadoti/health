import { ReactNode } from "react";



export function ModalBody({ children }: { children: ReactNode}) {

  return (
    <main>
      {children}
    </main>
  )
}