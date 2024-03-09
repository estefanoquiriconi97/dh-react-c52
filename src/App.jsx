import { useState } from 'react'
import './App.css'
import { Gif } from './assets/components/Gif'

const URL_BASE = 'https://api.giphy.com/v1/gifs/trending'
const API_KEY = '2G3plNGzf5KAERR1ekVJPak9Xo1yaLpv'

function App() {
  const [gifs, setGifs] = useState([])

  const fetchApi = async () => {
    const response = await fetch(`${URL_BASE}?api_key=${API_KEY}&limit=4`)
    const data = await response.json()
    setGifs(data.data)
  }

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            GIPHY APP
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarResponsive'
            aria-controls='navbarResponsive'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
        </div>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='nav ml-auto'>
            <li className='nav-item'>
              <button className='btn btn-success' onClick={fetchApi}>
                Cargar random
              </button>
            </li>
          </ul>
        </div>
      </nav>
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
