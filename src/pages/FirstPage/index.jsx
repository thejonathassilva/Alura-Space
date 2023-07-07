import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styles from './FirstPage.module.scss'
import Banner from "../../components/Banner";

export default function FirstPage() {
  return (
    <>
    <Header/>
    <main>
      <section className={styles.main}>
        <Menu/>
        <Banner/>
      </section>
    </main>
    </>
  )
}