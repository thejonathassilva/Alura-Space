import styles from './Header.module.scss'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo da Alura Space"></img>
      <div className={styles.header__container}>
        <input className={styles.header__input} type="text" placeholder="O que voce procura?"/>
        <img src={search} alt="ícone da lupa" />
      </div>
    </header>
  )
};