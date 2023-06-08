'use client'
import React from 'react'
import classes from './CircleComponents.module.css'
import Square from './helperFunctions/Squares'

import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function CircleComponents() {
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
    <div className={classes.digitalniSpecialistiSection} ref={ref}>
      <motion.h1 animate={animation}>DIGITAL SPECIALISTI</motion.h1>
      <div className={classes.circleContainer}>
        <div className={`${classes.circle} ${classes.circleOne}`} id='storitve'>
          <p>Izdelava spletnih strani in trgovin </p>
        </div>
        <div className={`${classes.circle} ${classes.circleOne}`}>
          <p>Vodenje socialnih omrežij </p>
        </div>
        <div className={`${classes.circle} ${classes.circleOne}`}>
          <p>Grafično oblikovanje </p>
        </div>

        <div className={`${classes.circle} ${classes.circleOne}`}>
          <p>Google oglaševanje </p>
        </div>
        <div className={`${classes.circle} ${classes.circleOne}`}>
          <p>E-mail marketing </p>
        </div>
        <div className={`${classes.circle} ${classes.circleOne}`}>
          <p>SEO optimizacija </p>
        </div>
        <div className={`${classes.circle} ${classes.circleOne}`}>
          <p>Facebook oglaševanje </p>
        </div>
        <div className={`${classes.circle} ${classes.circleOne}`}>
          <p>Foto in video </p>
        </div>
        <div className={`${classes.circle} ${classes.circleOne}`}>
          <p>Tekstopisje in blogi </p>
        </div>
        <div className={`${classes.circle} ${classes.circleOne}`}>
          <p>AR in VR resničnost</p>
        </div>
        <div className={`${classes.circle} ${classes.circleOne}`}>
          <p>Influencer marketing </p>
        </div>
      </div>

      <Square className={classes.squareContainer} />
    </div>
  )
}

export default CircleComponents
