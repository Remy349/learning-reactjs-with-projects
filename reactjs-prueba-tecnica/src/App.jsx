import React from 'react'
import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imgUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>ReactJS prueba tecnica - App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imgUrl && (
        <img
          src={`${CAT_PREFIX_IMAGE_URL}${imgUrl}`}
          alt={`Image extracted using the first word for ${fact}`}
        />
      )}
    </main>
  )
}
