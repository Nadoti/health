import { ReactNode } from "react";



export function ModalAction({ children }: { children: ReactNode}) {

  return (
    <span className="flex gap-5">
      {children}
    </span>
  )
}