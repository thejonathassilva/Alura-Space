import styles from './FirstPage.module.scss'

import Header from "components/Header";
import Menu from "components/Menu";
import Banner from "components/Banner";
import Footer from "components/Footer";
import Gallery from "components/Gallery";
import Popular from "components/Popular";

export default function FirstPage() {
  return (
    <>
    <Header/>
    <main>
      <section className={styles.main}>
        <Menu/>
        <Banner/>
      </section>
      <div className={styles.gallery}>
      < Gallery/>
        <Popular/>
      </div>
    </main>
    <Footer/>
    </>
  )
}