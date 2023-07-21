import { useEffect, useState } from 'react'

export function useCatImage({ fact }) {
  const [imgUrl, setImgUrl] = useState()

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

  return { imgUrl }
}
