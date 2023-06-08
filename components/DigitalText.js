'use client'
import React from 'react'
import classes from './DigitalText.module.css'

import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function DigitalText() {
  const { ref, inView } = useInView({
    threshold: 0.2,
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
    <div className={classes.textCotaniner} ref={ref}>
      <motion.div className={classes.text1} animate={animation}>
        <p>Slaba spletna prisotnost ovira rast vašega podjetja?</p>
        <br></br>
        <p>Niste prepričani, kako vam digitalni marketing pomaga? </p> <br></br>
        <p>Vaš dobiček stagnira in se ne znajdete, kako ga ponovno zvišati? </p>
      </motion.div>
      <motion.div className={classes.text2} animate={animation}>
        <p>
          Naši strokovnjaki za digitalni marketing vam bodo pomagali, da
          iztržite največ iz digitalnega marketinga za prepoznavnost svoje
          blagovne znamke in rast prodaje.
        </p>
      </motion.div>
    </div>
  )
}

export default DigitalText
