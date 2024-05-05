import { ReactNode } from "react";



export function ModalHeader({ children }: { children: ReactNode}) {

  return (
    <header>
      <h3 className="text-xl text-zinc-300">
        {children}
      </h3>
    </header>
  )
}