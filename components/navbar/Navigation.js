import * as React from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const Navigation = ({ toggle }) => (
  <motion.ul variants={variants} className='phone'>
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} text={text} links={links} onClick={toggle} />
    ))}
  </motion.ul>
)

const itemIds = [0, 1, 2, 3, 4, 5]
const text = [
  'reference',
  'storitve',
  'o nas',
  'mnenja strank',
  'ekipa',
  'izdelava spletnih stran',
]
const links = [
  '/#reference',
  '/#storitve',
  '/#ekipa',
  '/#mnenja-strank',
  '/#ekipa',
  '/#izdelavaSpletnihStran',
]
