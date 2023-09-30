import { useQuestionsStore } from './store/question'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { type Question as QuestionType } from './types'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const getBackgroundColor = (info: QuestionType, index: number) => {
  const { userSelectedAnswer, correctAnswer } = info

  if (userSelectedAnswer == null) return 'bg-transparent'

  if (index !== correctAnswer && index !== userSelectedAnswer)
    return 'bg-transparent'

  if (index === correctAnswer) return 'bg-green-500'

  if (index === userSelectedAnswer) return 'bg-red-500'

  return 'bg-transparent'
}

const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer)

  const createHandleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex)
  }

  return (
    <article className='border-gray-300 border-[1px] py-6 rounded-lg px-6 w-[760px]'>
      <h2 className='mb-4 font-semibold text-lg'>{info.question}</h2>
      <SyntaxHighlighter
        className='rounded-lg'
        language='javascript'
        style={gradientDark}
      >
        {info.code}
      </SyntaxHighlighter>
      <ul className='mt-4 bg-gray-300 rounded-lg'>
        {info.answers.map((answer, index) => (
          <li key={index}>
            <button
              disabled={info.userSelectedAnswer != null}
              onClick={createHandleClick(index)}
              className={`py-3 rounded-lg pl-4 w-full text-left hover:bg-gray-400 ${getBackgroundColor(
                info,
                index,
              )}`}
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </article>
  )
}

export const Game = () => {
  const questions = useQuestionsStore((state) => state.questions)
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion)
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion)
  const goPreviousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestion,
  )

  const questionInfo = questions[currentQuestion]

  return (
    <>
      <div className='flex items-center justify-center mb-6 gap-x-4'>
        <button onClick={goPreviousQuestion} disabled={currentQuestion === 0}>
          <ChevronLeft className='w-8 h-8' />
        </button>
        {currentQuestion + 1} / {questions.length}
        <button
          onClick={goNextQuestion}
          disabled={currentQuestion >= questions.length - 1}
        >
          <ChevronRight className='w-8 h-8' />
        </button>
      </div>
      <Question info={questionInfo} />
    </>
  )
}
