import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Index.module.scss'
import Home from '../components/Home'

export default function index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Home />
      </main>

    
    </div>
  )
}
