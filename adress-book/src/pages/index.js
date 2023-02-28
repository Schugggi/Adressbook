import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Adressbuch</title>
      </Head>
      <main className={styles.main}>
        <h1>Adressbuch</h1>
      </main>
    </>
  )
}
