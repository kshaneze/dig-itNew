import React from 'react'
import dynamic from 'next/dynamic'

const DigitalText = dynamic(() => import('./DigitalText'))
const KajBosteDosegnuli = dynamic(() => import('./KajBosteDosegnuli'))
const Statistika = dynamic(() => import('./Statistika'))
const Projekti = dynamic(() => import('./Projekti'))
const Mnenja = dynamic(() => import('./MnenjaStrank'))
const IzdelavaStrani = dynamic(() => import('./IzdelavaStrani'))
const DigitEkipa = dynamic(() => import('./DigitEkipa'))
const Popup = dynamic(() => import('./helperFunctions/Popup'))
const CircleComponents = dynamic(() => import('./CircleComponents'))

const KajBosteDoseegliMobile = dynamic(() =>
  import('./mobile/KajBosteDoseegliMobile')
)

// const HeroMobile = dynamic(() => import('./mobile/HeroMobile'))

import HeroMobile from './mobile/HeroMobile'

function PageLayoutHolder() {
  return (
    <div className='layout'>
      <HeroMobile />
      <section>
        <CircleComponents />
        <DigitalText />
      </section>
      <Popup />

      <KajBosteDosegnuli />
      <KajBosteDoseegliMobile />
      <Statistika />
      <Projekti />

      <Mnenja />

      <IzdelavaStrani />
      <DigitEkipa />
    </div>
  )
}

export default PageLayoutHolder
