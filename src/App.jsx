import { useEffect, useState } from 'react'
import './App.css'
import { Gif } from './assets/components/Gif'
import { NavBar } from './assets/components/NavBar'

const URL_BASE = 'https://api.giphy.com/v1/gifs'
const API_KEY = '2G3plNGzf5KAERR1ekVJPak9Xo1yaLpv'
const QUANTITY = 3;

function App() {
  const [gifs, setGifs] = useState([])

  const fetchApi = async () => {
    const response = await fetch(
      `${URL_BASE}/trending?api_key=${API_KEY}&limit=${QUANTITY}`
    )
    const data = await response.json()
    setGifs(data.data)
  }

  const cargarRandoms = async (length) => {
    const randoms = []
    for (let i = 0; i < gifs.length; i++) {
      const response = await fetch(`${URL_BASE}/random?api_key=${API_KEY}`)
      const data = await response.json()
      randoms[i] = data.data
    }
    setGifs(randoms)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <>
      <NavBar cargarRandoms={cargarRandoms} />
      <div className='container'>
        <div className='row text-center'>
          {gifs.map((gif) => (
            <Gif key={gif.id} gif={gif} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
