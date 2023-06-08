import React from 'react'
import { useState, useEffect, useRef } from 'react'
// import classes from './CountUp.module.css'

import { useInView } from 'react-intersection-observer'

function CountUp({ start = 0, end, className }) {
  const [value, setValue] = useState(null)
  const reff = useRef(start)
  const { ref, inView } = useInView()
  const [isInView, setIsInView] = useState(false)

  const counter = end / 200

  const Count = () => {
    if (reff.current < end) {
      const result = Math.ceil(reff.current + counter)
      if (result > end) return setValue(end)

      setValue(result)
      reff.current = result
    }

    setTimeout(Count, 30)
  }

  useEffect(() => {
    let isMounted = inView
    if (isMounted) {
      Count()
    }

    return () => (isMounted = false)
  }, [end, inView])

  return (
    <div ref={ref}>
      {' '}
      <p className={className}>{value}+</p>
    </div>
  )
}

export default CountUp
