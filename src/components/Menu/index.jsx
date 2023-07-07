import React from 'react'
import home from '../../assets/icones/home-ativo.png'
import mostLikes from '../../assets/icones/mais-curtidas-inativo.png'
import mostViewed from '../../assets/icones/mais-vistas-inativo.png'
import news from '../../assets/icones/novas-inativo.png'
import surpriseMe from '../../assets/icones/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <img src={home} alt="Home" />
          <a href="http://">Inicio</a>
        </li>
        <li className={styles.menu__item}>
          <img src={mostLikes} alt="Mais curtidas" />
          <a href="http://">Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={mostViewed} alt="Mais vistas" />
          <a href="http://">Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={news} alt="Novas" />
          <a href="http://">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpriseMe} alt="Surpreenda-me" />
          <a href="http://">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  )
}
