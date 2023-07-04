import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src='/assets/logo.png' alt="Logo da Alura Space"></img>
      <div className={styles.header__container}>
        <input className={styles.header__input} type="text" placeholder="O que voce procura?"/>
        <img src='/assets/search.png' alt="ícone da lupa" />
      </div>
    </header>
  )
};