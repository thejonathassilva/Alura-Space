import React, { useState } from 'react'
import Tags from '../Tags'
import styles from './Gallery.module.scss'
import Cards from './Cards'
import photos from './photos.json'

export default function Gallery() {
  const [items, setItems] = useState(photos);
  const tags = [...new Set(photos.map((value) => value.tag))];

  const photosFilter = (tag) => {
    const newPhotos = photos.filter((photo) => {
      return photo.tag === tag;
    });

    setItems(newPhotos);
  };

  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags 
        photosFilter={photosFilter}
        setItems={setItems}
        tags= {tags}
      />
      <Cards 
        items={items}
        styles={styles}  
      />
    </section>
  )
}
