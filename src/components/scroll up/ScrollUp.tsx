'use client'

import { useCallback, useEffect, useState } from 'react'
import { Container, Icon } from './ScrollUp.style'

const ScrollUp = () => {
const [isVisible, setIsVisible] = useState(false)


const scrollToTop = useCallback(() => {
    window.scrollTo(0,0)
}, [])
    
useEffect(() => {

  const hideArrowScroll = () => {
    const scrollY = window.scrollY

    if (scrollY < 400) {
      setIsVisible(false)
    }
    else {
      setIsVisible(true)
    }
  }

  window.addEventListener("scroll", hideArrowScroll)
  
  return () => {
    window.removeEventListener("scroll", hideArrowScroll)
  }
}, [isVisible])


  return (
      <>
        <Container display={isVisible ? 'flex' : "none"} onClick={scrollToTop}>
        <Icon className="fa fa-arrow-up" aria-hidden="true"></Icon>      
       </Container>
      </>
  )
}

export default ScrollUp