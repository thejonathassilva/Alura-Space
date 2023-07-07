import React from 'react'
import styles from './Popular.module.scss'
import popularPhotos from './popular-photos.json'
import OnePopular from './OnePopular'

export default function Popular() {
  return (
    <aside className={styles.popular}>
      <h2>Populares</h2>
      <ul className={styles.popular__images}>
        {popularPhotos.map((popularPhoto) => {
          return(
            <OnePopular
              key={popularPhoto.id}  
              popularPhoto={popularPhoto}
            />
          )
        })}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  )
}
