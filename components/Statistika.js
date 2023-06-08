'use client'
import dynamic from 'next/dynamic'

import classes from './Statistika.module.css'

const CountUp = dynamic(() => import('./helperFunctions/CountUp'))

import Image from 'next/image'
import yellowCloud from '../public/yellow-cloud.webp'

import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function Statistika() {
  const { ref, inView } = useInView({
    threshold: 0.5,
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
    <AnimatePresence mode='wait'>
      <section className={classes.statistikaContainer} ref={ref}>
        <Image
          src={yellowCloud}
          className={classes.yellowCloud}
          alt='yellow cloud '
          width={668}
          height={919}
        />
        <motion.div
          className={classes.statistikaGrid}
          animate={animation}
          exit={{ opacity: 0 }}
        >
          <div className={classes.circle}>
            {/* <p className={`${classes.number} ${classes.numberOrange}`}>68+</p> */}
            <CountUp
              start={0}
              end={68}
              className={`${classes.number} ${classes.numberOrange}`}
            />
            <p className={classes.text}>Zaupa nam strank</p>
          </div>

          <div className={classes.circle}>
            <CountUp
              start={0}
              end={124}
              className={`${classes.number} ${classes.numberYellow}`}
            />
            <p className={classes.text}>Izdelanih projektov</p>
          </div>

          <div className={classes.circle}>
            <CountUp
              start={0}
              end={15}
              className={`${classes.number} ${classes.numberYellow}`}
            />
            <p className={classes.text}>strokovnjakov</p>
          </div>

          <div className={classes.circle}>
            <CountUp
              start={0}
              end={10}
              className={`${classes.number} ${classes.numberBlack}`}
            />
            <p className={classes.text}>digitalnih področij</p>
          </div>
        </motion.div>
      </section>
    </AnimatePresence>
  )
}

export default Statistika
