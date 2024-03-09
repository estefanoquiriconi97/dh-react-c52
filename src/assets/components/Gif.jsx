import React from 'react'

export const Gif = ({ gif }) => {
  return (
    <div className='col-lg-3 col-md-6 mb-4'>
      <div className='card h-100'>
        <img className='card-img-top' src={gif.images.original.url} alt='' />
        <div className='card-body'>
          <h4 className='card-title'>{gif.username}</h4>
        </div>
      </div>
    </div>
  )
}
