'use client'

import React from 'react'
import classes from './page.module.css'

import Squares from '../../components/helperFunctions/SquaresLanding'
import { motion, AnimatePresence } from 'framer-motion'

import { Quicksand } from 'next/font/google'
// import * as fbq from '../lib/fpixel'


const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['variable'],
})

function Page() {
  const analizaFormSubmition = (e) => {
    e.preventDefault()
  }

  const dropIn = {
    hidden: {
      opacity: '0',
      y: '-500px',
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: { y: '-500px', opacity: 0 },
  }

  

  return (

    
    <div className={`${classes.spletnaAnalizaSection} ${quicksand.className}`}>
      <motion.div
        className={classes.spletnAnalizaContainer}
        key='ponudba'
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <h1>Pridobite</h1>
        <h1>INFORMATIVNO PONUDBO</h1>
        <p className={classes.sodelovanje}>Začnimo sodelovanje!</p>
        <Squares />

        <form>
          <div className={classes.textFormContainer}>
            <div>
              <p>
                Pošljite nam povpraševanje in prejeli boste neobvezujočo ponudbo
                za izboljševanje vaše spletne prisotnosti.
              </p>
              <input type='text' placeholder='e-naslov'></input>
              <input type='tel' placeholder='telefon'></input>
              <div className={classes.checkboxContainer}>
                <input type='checkbox' id='scales' name='scales' />
                <span className={classes.checkmark}></span>

                <label htmlFor='scales'>
                  S prijavo soglašam, da se moje navedene osebne podatke
                  upravlja in obdeluje podjetje Dig-IT d.o.o.
                </label>
              </div>
            </div>

            <div>
              <p>Zanima me:</p>
              <div className={classes.zanimaMeOptions}>
                <div className={classes.ckButton} id='ck-button'>
                  <label>
                    <input type='checkbox' value='1' />
                    <span>spletna stran</span>
                  </label>
                </div>

                <div className={classes.ckButton} id='ck-button'>
                  <label>
                    <input type='checkbox' value='1' />
                    <span>spletna trgovina</span>
                  </label>
                </div>

                <div className={classes.ckButton} id='ck-button'>
                  <label>
                    <input type='checkbox' value='1' />
                    <span>SEO</span>
                  </label>
                </div>

                <div className={classes.ckButton} id='ck-button'>
                  <label>
                    <input type='checkbox' value='1' />
                    <span>vodenje družabnih profilov</span>
                  </label>
                </div>

                <div className={classes.ckButton} id='ck-button'>
                  <label>
                    <input type='checkbox' value='1' />
                    <span>tiskopisje</span>
                  </label>
                </div>

                <div className={classes.ckButton} id='ck-button'>
                  <label>
                    <input type='checkbox' value='1' />
                    <span>fotografiranje</span>
                  </label>
                </div>

                <div className={classes.ckButton} id='ck-button'>
                  <label>
                    <input type='checkbox' value='1' />
                    <span>organizacija dogodkov</span>
                  </label>
                </div>

                <div className={classes.ckButton} id='ck-button'>
                  <label>
                    <input type='checkbox' value='1' />
                    <span>video produkcija</span>
                  </label>
                </div>

                <div className={classes.ckButton} id='ck-button'>
                  <label>
                    <input type='checkbox' value='1' />
                    <span>grafično oblikovanje</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button className={classes.btn}>ŽELIM PONUDBO</button>
        </form>
      </motion.div>
    </div>
  )
}

export default Page
