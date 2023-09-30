import { useQuestionsData } from './hooks/useQuestionsData'
import { useQuestionsStore } from './store/question'

export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionsData()
  const reset = useQuestionsStore((state) => state.reset)

  return (
    <footer className='flex justify-center items-center flex-col mt-4'>
      <strong>{`Correctas: ${correct} - Incorrectas: ${incorrect} - Sin responder: ${unanswered}`}</strong>
      <button
        onClick={() => reset()}
        className='mt-4 bg-sky-600 text-white font-medium py-3 px-5 rounded-lg'
      >
        Resetear Juego
      </button>
    </footer>
  )
}
