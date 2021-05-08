import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Create.module.css'

import MemeMaker from '../components/MemeMaker'

export default function Create() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Memenifty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>Create is working</div>
        <MemeMaker/>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
