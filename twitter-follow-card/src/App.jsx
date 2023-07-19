import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {
  return (
    <section className='App'>
      <TwitterFollowCard
        username='remy349'
        name='Santiago Moraga Caldera'
        isFollowing={true}
      />
      <TwitterFollowCard username='fazt' name='Fazt' isFollowing={false} />
      <TwitterFollowCard
        username='midudev'
        name='Miguel Ángel Durán'
        isFollowing={true}
      />
      <TwitterFollowCard
        username='twitter'
        name='Twitter'
        isFollowing={false}
      />
    </section>
  )
}

export default App
