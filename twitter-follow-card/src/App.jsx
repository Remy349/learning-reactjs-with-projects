import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    username: 'remy349',
    name: 'Santiago Moraga Caldera',
  },
  {
    username: 'fazt',
    name: 'Fazt',
  },
  {
    username: 'midudev',
    name: 'Miguel Ángel Durán',
  },
  {
    username: 'twitter',
    name: 'Twitter',
  },
]

function App() {
  return (
    <section className='App'>
      {users.map(({ username, name }) => (
        <TwitterFollowCard key={username} username={username}>
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  )
}

export default App
