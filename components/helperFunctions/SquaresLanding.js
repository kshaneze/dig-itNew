'use client'
import React from 'react'
import classes from './SquaresLanding.module.css'

import { motion } from 'framer-motion'

function Squares({ width }) {
  const variants = {
    hidden: {
      opacity: 0,
      x: 15,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.7,
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      x: 15,
    },
  }

  return (
    <div className={classes.squaresContainer}>
      <motion.div
        className={classes.squareBox}
        variants={variants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
        <div className={classes.square}></div>
      </motion.div>
    </div>
  )
}

export default Squares
