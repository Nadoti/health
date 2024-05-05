import { ReactNode } from "react";





export function ModalRoot({ children }: { children: ReactNode}) {

  return (
    <section className="w-full h-full flex items-center justify-center absolute inset-0 bg-[rgba(0,0,0,0.6)] overflow-">
      <div className="w-full max-w-[1400px] flex flex-col gap-5 py-5 px-8 rounded-md relative bg-zinc-900 animations">
        {children}
      </div>
    </section>
  )
}
