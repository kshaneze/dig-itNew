'use client'

import React from 'react'
import classes from './MnenjaStrank.module.css'

import box from '../public/message-box.svg'
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
// import '../styles/styles.css'

import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function MnenjaStrank() {
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

  const [sliderRef] = useKeenSlider({
    breakpoints: {
      '(min-width: 600px)': {
        slides: { perView: 1, spacing: 5 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 2, spacing: 40 },
      },
    },
    slides: { perView: 1 },
  })

  return (
    <section className={classes.mnenjaSection} id='mnenja-strank' ref={ref}>
      <h1>Kaj o nas menijo stranke?</h1>
      <motion.div className={classes.mnenjaContainer} animate={animation}>
        <div ref={sliderRef} className='keen-slider'>
          <div className='keen-slider__slide number-slide1'>
            <div className={classes.messageContainer}>
              <Image
                src={box}
                className={classes.messageBox}
                alt='message box'
              />

              <div className={classes.message}>
                <p>Sara Kavčič, Zemono+</p>
                <p>
                  Vaši agenciji zaupam, ker s svojim pristopom in odnosom
                  upoštevate želje naročnika, ustvarjate vsebine po njegovih
                  smernicah in ste vedno na razpolago za spremembe in
                  izboljšave.
                </p>
              </div>
            </div>
          </div>
          <div className='keen-slider__slide number-slide2'>
            <div className={classes.messageContainer}>
              
              <Image
                src={box}
                className={classes.messageBox}
                alt='message box'
              />

              <div className={classes.message}>
                <p>Matija Čemažar, Agrosloven</p>
                <p>
                  V Dig-IT mi je najbolj všeč dobra volja in odprtost vseh
                  članov ekipe in njihova zagnanost do dela. Da o srčnosti in
                  nasmeških ne govorim - tega ne manjka
                </p>
              </div>
            </div>
          </div>
          <div className='keen-slider__slide number-slide3'>3</div>
        </div>
      </motion.div>
    </section>
  )
}

export default MnenjaStrank
