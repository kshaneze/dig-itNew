import Head from 'next/head'
import { quicksand } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })


// 'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import dynamic from 'next/dynamic'

// import * as fbq from '../../lib/fpixel'




import Hero from '../public/hero-image.webp'
import Logo from '../public/digit-logo-final.svg'


const SquaresLandingLeft = dynamic(() =>
  import('../components/helperFunctions/SquaresLandingLeft')
)
const SquaresLanding = dynamic(() =>
  import('../components/helperFunctions/SquaresLanding')
)


const PageLayoutHolder = dynamic(() =>
  import('../components/PageLayoutHolder')
)


export default function Home() {
  return (
     
   <main className={`${styles.pageContainer}`}>
  
  <div className={styles.imageContainer}>
    <Image
      src={Hero}
      alt='big landing image containing cat and text our team'
      priority={true}
      width={1915}
      height={1523}
    />
    <div className={styles.mainContentContainer}>
      <Image src={Logo} alt='digit logo' priority={true} />
      <p>
        Z intenzivno spletno prisotnostjo, dvignemo prihodke vašega
        podjetja.
      </p>
      <Link href='/informativno-ponudbo'>
        <button className={`${styles.btn} ${styles.btnhite}`}>
          PRIDOBITE INFORMATIVNO PONUDBO
        </button>
      </Link>

      <Link href='/brezplacna-analiza'>
        <button className={`${styles.btn} ${styles.btnBorder}`}>
          BREZPLAČNA SPLETNA ANALIZA
        </button>
      </Link>
    </div>
    
    <SquaresLandingLeft />
    <SquaresLanding />
  </div>
  {/* <HeroMobile />
  <section className={styles.circleSection}>
    <CircleComponents />
    <DigitalText />
  </section>
  <Popup />

  <KajBosteDosegnuli />
  <KajBosteDoseegliMobile />
  <Statistika />
  <Projekti />

  <Mnenja />

  <IzdelavaStrani />
  <DigitEkipa /> */}

  <PageLayoutHolder />

</main>

  )
}
