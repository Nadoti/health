
interface ModalCloseProps {
  closeModal: () => void
}

export function ModalClose({ closeModal }: ModalCloseProps) {


  return (
    <button onClick={closeModal} className="w-10 h-10 absolute -top-5 -right-5 text-lg font-bold transition-all hover:scale-105 rounded-full bg-red-500">
      X
    </button>
  )
}