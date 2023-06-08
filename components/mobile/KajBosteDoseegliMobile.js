import React from 'react'

import classes from './KajBosteDoseegliMobile.module.css'
import Image from 'next/image'

import mainImage from '../../public/cat-mobile.webp'

import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function KajBosteDoseegliMobile() {
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
    <section className={classes.kajBosteDosegnuliMobileContainer} ref={ref}>
      <h1>Kaj boste dosegli z digitalnim marketingom?</h1>

      <motion.div animate={animation}>
        <ul>
          <li>
            Večja spletna prodaja za 10-30%, v nekaterih primerih je lahko celo
            podvojena{' '}
          </li>
          <li>Uporabniki se dlje časa zadržijo na spletni strani.</li>
          <li>Več oddanih povpraševanj in spletnih nakupov.</li>
        </ul>
      </motion.div>
      <motion.div className={classes.imageContainer} animate={animation}>
        <Image
          src={mainImage}
          alt='ilustration of cat combined wtih phone and text'
          width={1224}
          height={1273}
        />
      </motion.div>

      <div>
        <ul>
          <li>Večja vključenost, doseg in prisotnost na družbenih medijih.</li>
          <li>Kreativni oglasi, ki vašemu podjetju prinesejo zaslužek.</li>
          <li>Višje pozicionirana spletna stran v iskalniku Google. </li>
        </ul>

        <button className={`${classes.btn} ${classes.btnWhite}`}>
          PRIDOBITE INFORMATIVNO PONUDBO
        </button>
        <button className={`${classes.btn} ${classes.btnYellow}`}>
          BREZPLAČNA SPLETNA ANALIZA
        </button>
      </div>
    </section>
  )
}

export default KajBosteDoseegliMobile
