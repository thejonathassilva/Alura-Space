import React from 'react'
import styles from './Popular.module.scss'
import popularPhotos from './popular-photos.json'
import OnePopular from './OnePopular'
import Button from 'components/Button'

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
      <Button
        context="Ver mais opções"
      />
    </aside>
  )
}
