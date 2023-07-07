import React from 'react'

export default function OnePopular({ popularPhoto }) {
  return (
    <li>
      <img 
        src={popularPhoto.path} 
        alt={popularPhoto.alt}
      />
    </li>
  )
}
