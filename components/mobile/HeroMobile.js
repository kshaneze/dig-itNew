import classes from './HeroMobile.module.css'
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

// import Hero from '../../public/hero-image--phone.webp'
// import Logo from '../../public/footer-logo.svg'

function HeroMobile() {
  return (
    <div className={classes.imageContainer}>
      <Image
        src='/hero-image--phone.webp'
        alt='big landing image containing cat and text our team'
        priority={true}
        width={200}
        height={400}
      />
      <div className={classes.mainContentContainer}>
        <Image src='/footer-logo.svg' width={100} height={100} alt='digit logo' />
        <p>
          Z intenzivno spletno prisotnostjo, dvignemo prihodke vašega podjetja.
        </p>
        <Link href='/informativna-ponudba'>
          <button className={`${classes.btn} ${classes.btnWhite}`}>
            PRIDOBITE INFORMATIVNO PONUDBO
          </button>
        </Link>
        <Link href='/brezplacna-analiza'>
          <button className={`${classes.btn} ${classes.btnBorder}`}>
            BREZPLAČNA SPLETNA ANALIZA
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HeroMobile
