'use client'
import classes from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'

import Logo from '../public/asc.svg'
import Fb from '../public/fb-white.svg'
import socialInstagram from '../public/icon-instagram.svg'
import socialTiktok from '../public/icon-tiktok.svg'
import socialLinkedin from '../public/icon-linkedin.svg'

import { motion, AnimatePresence } from 'framer-motion'
import { Example } from './navbar/Example'

function Header() {
  return (
    <header className={classes.header}>
      <Example />
    
       
      <div className={classes.headerContainer}>
        <div className={classes.headerLeft}>
          <ul>
            <li>
              <a href='https://dig-it.si/#reference'>reference </a>
            </li>

            <li>
              <a href='https://dig-it.si/#storitve'>storitve</a>
            </li>

            <li>
              <a href='https://dig-it.si/#ekipa'>o nas</a>
            </li>

            <li>
              <a href='https://dig-it.si/#mnenja-strank'>mnenja strank</a>
            </li>
          </ul>
          <div className={classes.navbar}></div>
        </div>

        <div className={classes.logoDiv}>
          <Link href='/'>
            <Image
              src={Logo}
              width={100}
              alt='logo digit'
              className={classes.logo}
            />
          </Link>
        </div>

        <div className={classes.headerRight}>
          <ul>
            <li>
              <a href='https://dig-it.si/#ekipa'>ekipa</a>
            </li>
            <li>
              <a href='https://dig-it.si/#izdelavaSpletnihStran'>izdelava spletnih strani</a>
            </li>
            <li className={classes.socials}>
              <Link href='https://www.facebook.com/digitslo/' target='blank'>
                <Image src={Fb} alt='facebook social link icon' />
              </Link>
              <Link href='https://www.instagram.com/digitslo/' target='blank'>
                <Image src={socialInstagram} alt='instagram social link icon' />
              </Link>
              <Link
                href='https://www.linkedin.com/company/di-git/'
                target='blank'
              >
                <Image src={socialLinkedin} alt='linkedin social link icon' />
              </Link>
              <Link href='https://www.tiktok.com/@digitagencija' target='blank'>
                <Image src={socialTiktok} alt='tiktok social link icon' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
