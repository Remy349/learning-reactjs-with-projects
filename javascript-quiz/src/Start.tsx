import { useQuestionsStore } from './store/question'

export const Start = () => {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions)

  const handleClick = () => {
    fetchQuestions(5)
  }

  return (
    <button
      className='bg-sky-600 text-white font-medium py-3 px-5 rounded-lg'
      onClick={handleClick}
    >
      ¡Empezar!
    </button>
  )
}
