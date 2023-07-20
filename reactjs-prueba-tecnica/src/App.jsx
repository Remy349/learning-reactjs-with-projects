import React, { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]

    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
      .then((res) => res.json())
      .then((data) => {
        const { url } = data
        setImgUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>ReactJS prueba tecnica - App de gatitos</h1>
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
