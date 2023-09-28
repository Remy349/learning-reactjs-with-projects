import { JavaScriptLogo } from './JavaScriptLogo'
import { Start } from './Start'

function App() {
  return (
    <main>
      <div className='min-h-screen flex items-center justify-center flex-col'>
        <header className='flex items-center justify-center gap-x-4'>
          <JavaScriptLogo />
          <h1 className='font-medium text-4xl'>JavaScript Quiz</h1>
        </header>
        <Start />
      </div>
    </main>
  )
}

export default App
