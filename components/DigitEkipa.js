'use client'
import classes from './DigitEkipa.module.css'

import Image from 'next/image'
import digItLogo from '../public/digit-logo-final.svg'
import ekipa from '../public/ekipa-digit.webp'

import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function DigitEkipa() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  })
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      })
    }

    if (!inView) {
      animation.start({
        x: '-100vw',
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      })
    }
  }, [inView])

  return (
    <section className={classes.digitEkipaSection} id='ekipa' ref={ref}>
      <motion.div className={classes.ekipaContainer} animate={animation}>
        <div className={classes.ekipaBox1}>
          <Image src={digItLogo} alt='digit logo' />
          <h1>EKIPA</h1>
          <p>
            Smo ekipa strokovnjakov za digitalni marketing, ki svoje delo
            opravljamo z največjim veseljem in strastjo. Pokrivamo različna
            področja digitalnega marketinga s ciljem digitalne rasti podjetja,
            kot je vaše.{' '}
          </p>
        </div>
        <div className={classes.ekipaBox2}>
          <Image src={ekipa} alt='dig-it ekipa ilustration agency' />
        </div>
      </motion.div>
    </section>
  )
}

export default DigitEkipa
