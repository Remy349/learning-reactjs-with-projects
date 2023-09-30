import { Game } from './Game'
import { JavaScriptLogo } from './JavaScriptLogo'
import { Start } from './Start'
import { useQuestionsStore } from './store/question'

function App() {
  const questions = useQuestionsStore((state) => state.questions)

  return (
    <main>
      <div className='min-h-screen flex items-center justify-center flex-col'>
        <header className='flex items-center justify-center gap-x-4'>
          <JavaScriptLogo />
          <h1 className='font-medium text-4xl'>JavaScript Quiz</h1>
        </header>
        <div className='mt-6'>
          {questions.length === 0 && <Start />}
          {questions.length > 0 && <Game />}
        </div>
      </div>
    </main>
  )
}

export default App
