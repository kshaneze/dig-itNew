'use client'

import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import classes from './Popup.module.css'

import toast, {Toaster} from 'react-hot-toast'

import { useState } from 'react'
import Head from 'next/head'
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
      delay: 5,
    },
  },
  exit: { y: '-500px', opacity: 0 },
}

function Popup() {
  const [popupIsActive, setPopupIsActive] = useState(true)
  const [email, setEmail] = useState(true)
  const  [seStrinjam, setSeStrinjam] = useState(false)

  const emailInputHandler =  (e) => {
    setEmail(e.target.value)
  }

  const checkboxInputHandler =  (e) => {
    setSeStrinjam(e.target.value)
  }

  const closePopupHandler = (e) => {
    setPopupIsActive(false)
  }

  const closePopupHandlerBackground = (event) => {
    if (event.target.id === 'popup') {
      setPopupIsActive(false)
    } else {
      return
    }
  }

  const sendHandler = async (e) => {
    e.preventDefault()
    const sendMessage = {
      mail: email,
      seStrinjam: seStrinjam,
    };

    if (
      sendMessage.seStrinjam !== "" &&
      sendMessage.mail !== "" 
    ) {
      const req = await fetch("/api/contactPopup", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(sendMessage),
      });

      const res = await req.json();

      console.log(res.status);

      if (res) {
        toast.success("Sporočilo je uspešno poslano!");
        setEmail("");
        setSeStrinjam("");
        setPopupIsActive(false)
      } else {
        toast.error("Prišlo je do napake.");
      }
    } else {
      toast.error("Prazna polja!");
    }
  };


  return (
    <>
        <Toaster/>

    <AnimatePresence mode='wait' onExitComplete={() => null}>
      {popupIsActive && (
        <motion.div
          className={classes.popup}
          onClick={closePopupHandlerBackground}
          id='popup'
          variants={dropIn}
          initial='hidden'
          animate='visible'
          exit='exit'
          key='modal'
        >
          <motion.div
            className={classes.popupContainer}
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <p>Prijava na</p>
            <p>E-NOVICE!</p>
            <p>
              Vabimo vas, da se prijavite na naše e-novice. Nekajkrat mesečno
              vas bomo obveščali o naših prihajajočih dogodkih, najzanimivejših
              zapisih ter naših drugih aktivnostih in novostih.
            </p>
            <form onSubmit={sendHandler}>
              <input
                className={classes.email}
                type='email'
                placeholder='Vpišite vaš e-naslov'
                onChange={emailInputHandler}
                value={email}
              ></input>
              <button className={classes.btn}>PRIJAVA</button>
              <div className={classes.checkboxContainer}>
                <input
                  id='checkbox'
                  name='se strinjam'
                  value='se strinjam za novice'
                  type='checkbox'
                  htmlFor='checkbox'
                  aria-label='Search'
                  onChange={checkboxInputHandler}
                ></input>
                <label name='se strinjam'>
                  Prebral sem in se strinjam s pogoji in politiko zasebnosti.
                </label>
              </div>
            </form>
            <div className={classes.closePopup} onClick={closePopupHandler}>
              <div className={classes.lineOne}></div>
              <div className={classes.lineTwo}></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}

export default Popup
