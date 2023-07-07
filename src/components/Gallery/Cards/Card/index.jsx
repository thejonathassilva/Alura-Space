import React from 'react'
import open from 'assets/open.png'
import favorite from 'assets/favorito.png'

export default function Card({ item, styles }) {
  return (
    <li className={styles.gallery__card}>
      <img 
        src={item.image} 
        alt={item.title} 
        className={styles.gallery__image} 
      />
      <p className={styles.gallery__description}>{item.title}</p>
      <div>
        <p>{item.credits}</p>
        <span>
          <img src={favorite} alt="ícone coração de curtir" />
          <img src={open} alt="ícone de abrir modal" />
        </span>
      </div>
    </li>
  )
}
