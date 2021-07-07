import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import MainNav from "./Navbar.tsx"
import githublogo from './GitHub-Mark-Light-32px.png'
import Footer from './footer.tsx'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Memenifty</title>
        <meta name="description" content="Memenifty" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <div>
        <MainNav />
      </div>

      <div>
        <Footer />
      </div>
      
    </div>
  )
}
