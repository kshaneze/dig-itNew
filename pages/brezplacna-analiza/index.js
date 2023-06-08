'use client'
import React, { use, useState } from 'react'
import classes from './page.module.css'

import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['variable'],
})

import Squares from '../../components/helperFunctions/SquaresLanding'
import { motion, AnimatePresence } from 'framer-motion'

function Page() {
  const [website, setWebsite] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const websiteInputHandler = (e) => {
    setWebsite(e.target.value)
  }

  const emailInputHandler = (e) => {
    setEmail(e.target.value)
  }

  const phoneInputHandler = (e) => {
    setPhone(e.target.value)
  }
  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   console.log(website, email, phone)
  //   setWebsite('')
  //   setEmail('')
  //   setPhone('')
  // }

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
    const sendMessage = {
      website: website,
      mail: email,
      tel: phone,
    };

    if (
      sendMessage.website !== "" &&
      sendMessage.mail !== "" &&
      sendMessage.tel !== ""
    ) {
      const req = await fetch("/api/contact", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(sendMessage),
      });

      const res = await req.json();

      console.log(res.status);

      if (res) {
        // toast.success("Sporočilo je uspešno poslano!");
        setEmail("");
        setPhone("");
        setWebsite("");
      } else {
        // toast.error("Prišlo je do napake.");
      }
    } else {
      // toast.error("Prazna polja!");
    }
  };

  return (
    <div className={`${classes.spletnaAnalizaSection} ${quicksand.className}`}>
      <motion.div
        className={classes.spletnAnalizaContainer}
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <h1>Brezplačna spletna analiza</h1>
        <h1>SPLETNEGA MESTA</h1>
        <Squares />

        <div className={classes.textFormContainer}>
          <div>
            <p>
              Za vas analiziramo najpomembnejše kazalnike uspešnosti v iskalniku
              Google in vam podamo konkretne predloge za izboljševanje vaših
              uvrstitev.
            </p>
          </div>

          <form onSubmit={sendHandler}>
            <input
              type='text'
              placeholder='naslov spletnega mesta'
              onChange={websiteInputHandler}
              value={website}
            ></input>
            <input
              type='email'
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
              <input type='checkbox' id='scales' name='scales' />
              <span className={classes.checkmark}></span>

              <label htmlFor='scales'>
                S prijavo soglašam, da se moje navedene osebne podatke upravlja
                in obdeluje podjetje Dig-IT d.o.o.
              </label>
            </div>

            <button className={classes.btn}>ŽELIM BREZPLAČNO ANALIZO</button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default Page
