import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import MainNav from "./Navbar.tsx"
import githublogo from './GitHub-Mark-Light-32px.png'
import Footer from './footer.tsx'
import MainBody from './mainbody.tsx'


export default function Home() {
  return (
    <memenifty className="container">
        <Head>
          <title>Memenifty</title>
          <meta name="tab description" content="Memenifty" />
          <link rel="icon" href="/logo.ico" />
        </Head>

        <MainNav />

        <MainBody />

        <Footer />

    </memenifty>
  )
}
