'use client'
import Link from 'next/link'
import { Container, IconBox,Bars,Times,Wrapper, Logo, Box, Icon, List, Ul, Button, Wrap } from './Navbar.style'
import {useState, useEffect, useCallback} from 'react'
import DarkBg from '../dark bg/DarkBg'


const Navbar = () => {
  const [isScreenScrolled, setIsScreenScrolled] = useState(false)
  const [enableNavbarMobile, setEnableNavbarMobile] = useState(false)

  // const [linkColor, setLinkColor] = useState("")
  
  // const linkStyle = {
  //   color: linkColor
  // }
  // useEffect(() => {
  //   setLinkStyle(window.innerWidth <= 1100 && isScreenScrolled ? "black" : "white"
  //   )    
  // },[linkStyle, isScreenScrolled])


  useEffect(() => {
    const enableScreenScolling = () => {
      const screenHeight = window.scrollY

      if (screenHeight >= 508) {
          setIsScreenScrolled(true)
      }
      else{
        setIsScreenScrolled(false)
      }
    }

    window.addEventListener("scroll", enableScreenScolling)

    return () => {
    window.removeEventListener("scroll", enableScreenScolling)
    }
  }, [isScreenScrolled])
  
  
  const enableNavbarMobileFunction = useCallback(() => {
    setEnableNavbarMobile(true)
  }, [])

    
  const disableNavbarMobileFunction = useCallback(() => {
    setEnableNavbarMobile(false)
  }, [])

  return (
    <>
      {enableNavbarMobile && <DarkBg />}
      <Container bg={isScreenScrolled ? "white" : "transparent"} className="navbar flex justify-between align-middle">
         
      <Wrapper className='wrapper flex'>
            <Wrap className='flex'>
              <Logo className="uppercase logo-name">Nerzpaints</Logo>
          </Wrap>     
        <Ul position={enableNavbarMobile ? "0" : "-50000px"} className='flex'>
      
        <IconBox>
          <Times onClick={disableNavbarMobileFunction} className="fa fa-times" aria-hidden="true"></Times>
          </IconBox>
            <List><Link className="navbar-links" href="/">Home</Link></List>
              <List><Link className="navbar-links" href="/about">About</Link></List>
              <List><Link className="navbar-links" href="/services">Services</Link></List>
              <List><Link className="navbar-links" href="/projects">Projects</Link></List>  
                  <List><Link className="navbar-links" href="/reviews">Reviews</Link></List>  
                  <List><Link className="navbar-links" href="/shop">Shop</Link></List>  
            <List><Link className="navbar-links" href="/blog">Blog</Link></List>
          </Ul>
</Wrapper>
          <Box className='flex align-middle btn-group'>
              <Button className='contact-btn' type="button">Contact</Button>

        <Icon className="fa fa-search" aria-hidden="true"></Icon>

       <IconBox>
        <Bars onClick={enableNavbarMobileFunction} bg={isScreenScrolled ? "black" : "white"} className="fa fa-bars" aria-hidden="true"></Bars>
    </IconBox>
      </Box>
      </Container>
    </>
  )
}

export default Navbar