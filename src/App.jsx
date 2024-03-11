import { useEffect, useState } from 'react'
import './App.css'
import { Gif } from './assets/components/Gif'
import { NavBar } from './assets/components/NavBar'

import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './assets/components/Home'
import { Contact } from './assets/components/Contact'
import { About } from './assets/components/About'

const URL_BASE = 'https://api.giphy.com/v1/gifs'
const API_KEY = '2G3plNGzf5KAERR1ekVJPak9Xo1yaLpv'
const QUANTITY = 3

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
      <div className='text-center'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>
        </Routes>
      </div>
      <div>
        <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link> <br />
        <Link to="/contact">Contact</Link> <br />
      </div>
      <hr />
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
