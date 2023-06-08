'use client'
import React from 'react'
import classes from './IzdelavaStrani.module.css'

import Image from 'next/image'
import laptop from '../public/laptop.webp'
import SquaresIzdelava from './helperFunctions/SquaresIzdelava'

import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function IzdelavaStrani() {
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
        x: '100vw',
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      })
    }
  }, [inView])

  return (
    <div
      className={classes.izdelavaSection}
      ref={ref}
      id='izdelavaSpletnihStran'
    >
      <SquaresIzdelava />

      <motion.h1 animate={animation}>
        Izdelava spletnih strani in trgovin{' '}
      </motion.h1>

      <motion.div className={classes.imageContainer} animate={animation}>
        <div className={classes.circle}>
          <p>Za vas pripravimo vsebine (tekstopisje, foto in video)</p>
        </div>
        <div className={classes.circle}>
          <p>Mesečno izvajamo tehnično podporo in SEO optimizacijo</p>
        </div>
        <div className={classes.circle}>
          <p>Pripravimo izobraževanje za vaše sodelavce za urejanje vsebin</p>
        </div>
        <div className={classes.circle}>
          <p>
            Vašo spletno stran povežemo s profili na družbenih omrežjih in jih
            lahko profesionalno vodimo
          </p>
        </div>
        <div className={classes.circle}>
          <p>Spletno stran grafično oblikujemo po vaših željah</p>
        </div>

        <Image src={laptop} alt='laptop by digit' />
      </motion.div>
    </div>
  )
}

export default IzdelavaStrani
