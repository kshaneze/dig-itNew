'use client'
import React from 'react'
import classes from './Projekti.module.css'

import Image from 'next/image'

// import project1 from '../public/project1.webp'
// import project2 from '../public/project2.webp'
// import project3 from '../public/project3.webp'
// import project4 from '../public/project4.webp'
// import project6 from '../public/projectt6.webp'
// import project5 from '../public/promovideo.mp4'

import leftCloud from '../public/cloud-left.webp'

import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function Projekti() {
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
    <section className={classes.projektiSection} id='reference' ref={ref}>
      <div className={classes.titleContainer}>
        <h1>Referenčni</h1>
        <h1 className={classes.crossbar}>Projekti</h1>
      </div>
      <Image
        src={leftCloud}
        className={classes.cloudLeft}
        alt='yellow cloud'
        width={300}
        height={400}
      />

      <motion.div className={classes.projektiContainer} animate={animation}>
        <div className={classes.project}>
          <div className={classes.imageContainer}>
            <Image src='/project1.webp' alt='our project one' width={300} height={200} />
          </div>

          <p>Be around me: spletna stran</p>
        </div>

        <div className={classes.project}>
          <div className={classes.imageContainer}>
            <Image src='/project2.webp' alt='our project two' width={300} height={200}  />
          </div>
          <p>Kmetija Dolenc: oblikovanje embalaže</p>
        </div>

        <div className={classes.project}>
          <div className={classes.imageContainer}>
            <Image src='/project3.webp' alt='our project three' width={300} height={200}  />
          </div>
          <p>Vreček agro: FB in IG oglaševanje</p>
        </div>

        <div className={classes.project}>
          <div className={classes.imageContainer}>
            <Image src='/project4.webp' alt='our project four' width={300} height={200} />
          </div>
          <p>Bazen Kranj: vodenje socialnih omrežij</p>
        </div>

        <div className={classes.project}>
          <div className={classes.imageContainer}>


          {inView && <video autoPlay muted loop>
                       <source src="/promovideo.mp4" />
                     </video>
          }

          </div>
          <p>Infraslim: izdelava promovidea</p>
        </div>

        <div className={classes.project}>
          <div className={classes.imageContainer}>
            <Image src='/projectt6.webp' width={300} height={200} alt='our project six' />
          </div>
          <p>Balanz caffee: spletna stran</p>
        </div>
      </motion.div>
    </section>
  )
}

export default Projekti
