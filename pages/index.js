import Head from 'next/head'
import styles from '../styles/Home.module.css'
import api from '../contributor.json'
import Navbar from '../components/navbar'
import Button from '../components/button'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hacktoberfest For Fun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hacktoberfest For Fun
        </h1>

        <p className={styles.description}>
          Contributor List
        </p>
        <Button>Test</Button>

        <h2>
          {api.map((values) => {
            return(
              <>
                <h5>{values.name}</h5>
              </>
            )
          })}
        </h2>
      </main>


      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} Todemoon Studio
        </a>
      </footer>
    </div>
  )
}
