import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from '../app/components/elements/Nav'
import Hero from '../app/components/elements/Hero'
import About from '../app/components/elements/About'
import Extras from '../app/components/elements/Extras'
import Footer from '../app/components/elements/Footer'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tello</title>
        <meta name="description" content="Receive tips/donations on another level" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="app">
          <Nav />
          <Hero />
          <About />
          <Extras />
        </div>
      </main>

      <footer>
        <Footer />

      </footer>
    </div>
  )
}

export default Home
