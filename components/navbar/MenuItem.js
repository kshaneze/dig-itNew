import * as React from 'react'
import { motion } from 'framer-motion'

import Link from 'next/link'



const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
    display: 'flex',
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    display: 'none',
  },
}

const colors = [
  '#FF008C',
  '#D309E1',
  '#9C1AFF',
  '#7700FF',
  '#4400FF',
  '#4400FF',
]

export const MenuItem = ({ i, text, links }) => {
  const style = { border: `2px solid ${colors[i]}` }

 

  
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className='phone'
    >
      <div className='icon-placeholder' style={style} />
      <a href={links[i]} >
        <div className='text-placeholder'>{text[i]}</div>
      </a>
    </motion.li>
  )
}
