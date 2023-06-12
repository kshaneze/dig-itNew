'use client'

import React from 'react'
import classes from './page.module.css'
import { useState } from 'react'

import Squares from '../../components/helperFunctions/SquaresLanding'
import { motion, AnimatePresence } from 'framer-motion'

import toast, { Toaster } from 'react-hot-toast'

import { Quicksand } from 'next/font/google'
// import * as fbq from '../lib/fpixel'

import Head from 'next/head'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['variable'],
})

function Page() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [spletnaStran, setSpletnaStran] = useState('')
  const [spletnaTrgovina, setSpletnaTrgovina] = useState('')
  const [seo, setSeo] = useState('')
  const [vodenjeDružabnihProfilov, setVodenjeDružabnihProfilov] = useState('')
  const [tiskopisje, setTiskopisje] = useState('')
  const [fotografiranje, setFotografiranje] = useState('')
  const [organizacijaDogodkov, setOrganizacijaDogodkov] = useState('')
  const [videoProdukcija, setVideoProdukcija] = useState('')
  const [graficnoOblikovanje, setGraficnoOblikovanje] = useState('')
  const [soglasam, setSoglasam] = useState('')

  const emailInputHandler = (e) => {
    setEmail(e.target.value)
  }

  const phoneInputHandler = (e) => {
    setPhone(e.target.value)
  }

  const spletnaStranHandler = (e) => {
    setSpletnaStran(e.target.value)
  }

  const spletnaTrgovinaHandler = (e) => {
    setSpletnaTrgovina(e.target.value)
  }

  const seoHandler = (e) => {
    setSeo(e.target.value)
  }

  const vodenjeDružabnihProfilovHandler = (e) => {
    setVodenjeDružabnihProfilov(e.target.value)
  }

  const tiskopisjeHandler = (e) => {
    setTiskopisje(e.target.value)
  }

  const fotografiranjeHandler = (e) => {
    setFotografiranje(e.target.value)
  }

  const organizacijaDogodkovHandler = (e) => {
    setOrganizacijaDogodkov(e.target.value)
  }

  const videoProdukcijaHandler = (e) => {
    setVideoProdukcija(e.target.value)
  }

  const graficnoOblikovanjeHandler = (e) => {
    setGraficnoOblikovanje(e.target.value)
  }

  const soglasamHandler = (e) => {
    setSoglasam(e.target.value)
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

  const sendHandler = async (e) => {
    e.preventDefault()
    let sendMessage = {
      mail: email,
      tel: phone,
      zanimaMe: {
        spletnaStran: spletnaStran,
        spletnaTrgovina: spletnaTrgovina,
        seo: seo,
        vodenjeDružabnihProfilov: vodenjeDružabnihProfilov,
        tiskopisje: tiskopisje,
        fotografiranje: fotografiranje,
        organizacijaDogodkov: organizacijaDogodkov,
        videoProdukcija: videoProdukcija,
        graficnoOblikovanje: graficnoOblikovanje,
      },
      soglasam: soglasam,
    }

    if (
      sendMessage.mail !== '' &&
      sendMessage.tel !== '' &&
      sendMessage.zanimaMe !== '' &&
      sendMessage.soglasam !== ''
    ) {
      const req = await fetch('/api/contactPonudba', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'post',
        body: JSON.stringify(sendMessage),
      })

      const res = await req.json()

      console.log(res.status)

      if (res) {
        toast.success('Sporočilo je uspešno poslano!')
        setEmail('')
        setPhone('')
        setSpletnaStran('')
        setSpletnaTrgovina('')
        setSeo('')
        setTiskopisje('')
        setFotografiranje('')
        setVideoProdukcija('')
        setVodenjeDružabnihProfilov('')
        setGraficnoOblikovanje('')
        setOrganizacijaDogodkov('')
        let checkboxs = document.querySelectorAll('input')
        checkboxs.forEach((checkbox) => {
          checkbox.checked = false
        })
      } else {
        toast.error('Prišlo je do napake.')
      }
    } else {
      if (
        sendMessage.soglasam == '' &&
        sendMessage.mail !== '' &&
        sendMessage.tel !== '' &&
        sendMessage.zanimaMe !== ''
      ) {
        toast.error('Soglasanje je obvezno')
      } else {
        toast.error('Prazna polja!')
      }
    }
  }

  return (
    <>
      <Head>
        <title>Informativna ponudba</title>
      </Head>
      <Toaster />
      <div
        className={`${classes.spletnaAnalizaSection} ${quicksand.className}`}
      >
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

          <form onSubmit={sendHandler}>
            <div className={classes.textFormContainer}>
              <div>
                <p>
                  Pošljite nam povpraševanje in prejeli boste neobvezujočo
                  ponudbo za izboljševanje vaše spletne prisotnosti.
                </p>
                <input
                  type='text'
                  placeholder='e-naslov'
                  onChange={emailInputHandler}
                  value={email}
                ></input>
                <input
                  type='tel'
                  placeholder='telefon'
                  onChange={phoneInputHandler}
                  value={phone}
                ></input>
                <div className={classes.checkboxContainer}>
                  <input
                    type='checkbox'
                    id='scales'
                    name='scales'
                    // required='required'
                    value='S prijavo soglašam, da se moje navedene osebne podatke
                    upravlja in obdeluje podjetje Dig-IT d.o.o.'
                    onChange={soglasamHandler}
                  />
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
                      <input
                        type='checkbox'
                        onChange={spletnaStranHandler}
                        value='spletna stran'
                      />
                      <span>spletna stran</span>
                    </label>
                  </div>

                  <div className={classes.ckButton} id='ck-button'>
                    <label>
                      <input
                        type='checkbox'
                        onChange={spletnaTrgovinaHandler}
                        value='spletna trgovina'
                      />
                      <span>spletna trgovina</span>
                    </label>
                  </div>

                  <div className={classes.ckButton} id='ck-button'>
                    <label>
                      <input
                        type='checkbox'
                        onChange={seoHandler}
                        value='SEO'
                      />
                      <span>SEO</span>
                    </label>
                  </div>

                  <div className={classes.ckButton} id='ck-button'>
                    <label>
                      <input
                        type='checkbox'
                        onChange={vodenjeDružabnihProfilovHandler}
                        value='vodenje družabnih profilov'
                      />
                      <span>vodenje družabnih profilov</span>
                    </label>
                  </div>

                  <div className={classes.ckButton} id='ck-button'>
                    <label>
                      <input
                        type='checkbox'
                        onChange={tiskopisjeHandler}
                        value='tiskopisje'
                      />
                      <span>tiskopisje</span>
                    </label>
                  </div>

                  <div className={classes.ckButton} id='ck-button'>
                    <label>
                      <input
                        type='checkbox'
                        onChange={fotografiranjeHandler}
                        value='fotografiranje'
                      />
                      <span>fotografiranje</span>
                    </label>
                  </div>

                  <div className={classes.ckButton} id='ck-button'>
                    <label>
                      <input
                        type='checkbox'
                        onChange={organizacijaDogodkovHandler}
                        value='organizacija dogodkov'
                      />
                      <span>organizacija dogodkov</span>
                    </label>
                  </div>

                  <div className={classes.ckButton} id='ck-button'>
                    <label>
                      <input
                        type='checkbox'
                        onChange={videoProdukcijaHandler}
                        value='video produkcija'
                      />
                      <span>video produkcija</span>
                    </label>
                  </div>

                  <div className={classes.ckButton} id='ck-button'>
                    <label>
                      <input
                        type='checkbox'
                        value='grafično oblikovanje'
                        onChange={graficnoOblikovanjeHandler}
                      />
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
    </>
  )
}

export default Page
