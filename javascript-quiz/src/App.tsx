import { JavaScriptLogo } from './JavaScriptLogo'

function App() {
  return (
    <main className='min-h-screen flex items-center justify-center'>
      <div className='max-w-5xl mx-auto'>
        <header className='flex items-center justify-center gap-x-4'>
          <JavaScriptLogo />
          <h1 className='font-medium text-4xl'>JavaScript Quiz</h1>
        </header>
      </div>
    </main>
  )
}

export default App
