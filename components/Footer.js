'use client'

import React from 'react'
import classes from './Footer.module.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import Image from 'next/image'
import footerLogo from '../public/footer-logo.svg'
// import socialfb from '../public/fb-white.svg'
// import socialInstagram from '../public/icon-instagram.svg'
// import socialTiktok from '../public/icon-tiktok.svg'
// import socialLinkedin from '../public/icon-linkedin.svg'

import { motion } from 'framer-motion'

function Footer() {
  const pathname = usePathname()

  return (
    <footer
      className={classes.footerContainer}
      style={{
        background:
          pathname == '/brezplacna-analiza' ||
          pathname == '/informativno-ponudbo'
            ? 'linear-gradient(to right, black, #221c46)'
            : 'linear-gradient( rgb(137, 142, 171), rgb(137, 142, 165))',
      }}
    >
      <div className={classes.footerGrid}>
        <div className={classes.footerBox1}>
          <div>
            <Image src='/footer-logo.svg' alt='website footer logo' width={200} height={100} />
            <p>DIG-IT d.o.o.</p>
            <p>
              Gospodinjska ulica 8,
              <br />
              1000 Ljubljana
            </p>
          </div>

          <div>
            <div>
              <Image src='/footer-logo.svg' alt='website footer logo' width={100} height={100}/>
              <p>041 332 324 </p>
              <p>info@dig-it.si</p>
            </div>
          </div>
        </div>

        <div className={classes.footerBox2}>
          <div className={classes.box1}>
            <div>
              <p>
                <a href='#oNas'>o nas</a>
              </p>
              <p>
                <a href='#reference'>reference</a>
              </p>
              <p>
                <a href='#storitve'>storitve</a>
              </p>
            </div>
            <div>
              <p>
                <a href='#ekipa'>ekipa</a>
              </p>
              <p>
                {' '}
                <a href='#mnenja-strank'>mnenja strank</a>
              </p>
            </div>
          </div>

          <div className={classes.box2}>
            <div className={classes.socialsContainer}>
              <Link
                href='https://www.facebook.com/digitslo/'
                target='blank'
                className={classes.fb}
              >
                <Image src='/fb-white.svg' alt='facebook social link icon' width={26} height={26} />
              </Link>
              <Link href='https://www.instagram.com/digitslo/' target='blank'>
                <Image src='/icon-instagram.svg' alt='instagram social link icon' width={26} height={26}/>
              </Link>
              <Link
                href='https://www.linkedin.com/company/di-git/'
                target='blank'
              >
                <Image src='/icon-linkedin.svg' alt='linkedin social link icon' width={26} height={26} />
              </Link>
              <Link href='https://www.tiktok.com/@digitagencija' target='blank'>
                <Image src='/icon-tiktok.svg' alt='tiktok social link icon' width={26} height={26}/>
              </Link>
            </div>
            <Link href='/informativno-ponudbo'>
              <motion.button
                className={`${classes.btn} ${classes.btnWhite}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                PRIDOBITE INFORMATIVNO PONUDBO
              </motion.button>
            </Link>
            <Link href='/brezplacna-analiza'>
              <motion.button
                className={`${classes.btn} ${classes.btnYellow}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                BREZPLAČNA SPLETNA ANALIZA
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      <div className={classes.byDigitContainer}>
        <p>© 2023 Dig-IT </p>
      </div>
    </footer>
  )
}

export default Footer
