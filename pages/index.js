import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal Portfolio</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
      </Head>
      <header>
        <nav className={styles.navbar}>
          <i className="bi bi-person-square"><a href="#welcome-section"> Acerca de mi</a></i>
          <i className="bi bi-code-square"><a href="#projects"> Mis proyectos</a></i>
          <i className="bi bi-envelope"><a href="#contact"> Contacto</a></i>
        </nav>
      </header>
      <main className={styles.maindoc}>
        <section className={styles.welcomesection} id="welcome-section">
          <div className={styles.personalcard}>
            <h1>Sergio Valera</h1>
            <p><i>Aspiring web developer</i></p>
            <div className={styles.cardimg}></div>
          </div>  
        </section>
        <section className={styles.projects} id="projects">
          <h2>Estos son algunos de mis proyectos</h2>
          <div className={styles.projectsgrid}>
            <div className={styles.projecttile}>
              <a href="https://codepen.io/zoltan199/pen/LYOyrdR?editors=1100">
              <p>Tribute Page</p></a>
            </div>
            <div className={styles.projecttile}>
              <a href="https://codepen.io/zoltan199/pen/NWwjOYL">
                <p>Suvey Form</p>
              </a>
            </div>
            <div className={styles.projecttile}>
              <a href="https://codepen.io/zoltan199/pen/VwrbNgY">
                <p>Product Landing Page</p>
              </a>
            </div>
            <div className={styles.projecttile}>
              <a href="https://codepen.io/zoltan199/pen/podwPmB">
                <p>Technical Documentation Page</p>
              </a>
            </div>
            <div className={styles.projecttile}>
              <a href="https://zoltan199.github.io/Palindrome/palindrome.html">
                <p>Palindrome checker</p>
              </a>
            </div>
            <div className={styles.projecttile}>
              <a href="https://zoltan199.github.io/Roman-numbers/romans.html">
                <p>Roman numeral converter</p>
              </a>
            </div>
            <div className={styles.projecttile}>
              <a href="https://zoltan199.github.io/Caesars-cipher/cipher.html">
                <p>Caesars cipher</p>
              </a>
            </div>
            <div className={styles.projecttile}>
              <a href="https://zoltan199.github.io/Telophone-validator/telephone.html">
                <p>Telephone number validator</p>
              </a>
            </div>
            <div className={styles.projecttile}>
              <a href="https://zoltan199.github.io/Cash-register/cid.html">
                <p>Cash register</p>
              </a>
            </div>
          </div>
        </section>
        <section className={styles.contact} id="contact">
          <a href="https://github.com/Zoltan199" target="_blank"><i className="bi bi-github"></i>  GitHub</a>
          <a href="https://github.com/Zoltan199" target="_blank"><i className="bi bi-linkedin"></i>  Linkedin</a>
          <a href="https://github.com/Zoltan199" target="_blank"><i className="bi bi-envelope-fill"></i>  Email</a>
        </section>
      </main>
    </>
  )
}
