'use client'
import React from 'react'
import classes from './KajBosteDosegnuli.module.css'

import Link from 'next/link'
import Image from 'next/image'

import mainImage from '../public/macka-phone.webp'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function KajBosteDosegnuli() {
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
    <section className={classes.kajBosteDosegnuliContainer} ref={ref}>
      <h1>Kaj boste dosegli z digitalnim marketingom?</h1>
      <motion.div className={classes.imageContainer} animate={animation}>
        <p>
          Večja spletna prodaja za 10-30%, v nekaterih primerih je lahko celo
          podvojena{' '}
        </p>
        <p>Uporabniki se dlje časa zadržijo na spletni strani.</p>
        <p>Več oddanih povpraševanj in spletnih nakupov. </p>
        <Image
          src={mainImage}
          alt='landing photo declaring our digit webiste'
          width={900}
          height={740}
        />
        <p>Večja vključenost, doseg in prisotnost na družbenih medijih. </p>
        <p>Kreativni oglasi, ki vašemu podjetju prinesejo zaslužek. </p>
        <p>Višje pozicionirana spletna stran v iskalniku Google. </p>
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
      </motion.div>
    </section>
  )
}

export default KajBosteDosegnuli
