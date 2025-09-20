"use client"

import React from 'react'
import { twMerge } from 'tailwind-merge'
import Carousel from './Carousel'
import HeroNavigation from './HeroNavigation'

const HeroSection = ({classname}:{classname:string}) => {
  return (
    <section className={twMerge("",classname)} >
        <Carousel />
        <HeroNavigation />
    </section>
  )
}

export default HeroSection