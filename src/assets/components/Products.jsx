import React from 'react'
import {useParams} from 'react-router-dom'

export const Products = () => {
    const params = useParams();
  return (
    <h1>Products {params.id}</h1>
  )
}
