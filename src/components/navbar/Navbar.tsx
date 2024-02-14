'use client'
import Link from 'next/link'
import { Container, IconBox,Bars,Times,Wrapper, Logo, Box, Icon, List, Ul, Button, Wrap } from './Navbar.style'
import {useState, useEffect} from 'react'


const Navbar = () => {
  const [isScreenScrolled, setIsScreenScrolled] = useState(false)

  const linkStyle = {
    color: isScreenScrolled ? 'black' : 'white'
  }

  useEffect(() => {

    const enableScreenScolling = () => {
      const windowWidth = window.scrollY

      if (windowWidth >= 508) {
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
  
  
  return (
      <Container bg={isScreenScrolled ? "white" : "transparent"} className="navbar flex justify-between align-middle">
         
      <Wrapper className='wrapper flex'>
            <Wrap className='flex'>
              <Logo className="uppercase logo-name">Nerzpaints</Logo>
          </Wrap>     
        <Ul className='flex'>
      
        <IconBox>
          <Times className="fa fa-times" aria-hidden="true"></Times>
          </IconBox>
            <List><Link style={linkStyle} href="/">Home</Link></List>
              <List><Link style={linkStyle} href="/about">About</Link></List>
              <List><Link style={linkStyle} href="/services">Services</Link></List>
              <List><Link style={linkStyle} href="/projects">Projects</Link></List>  
                  <List><Link style={linkStyle} href="/reviews">Reviews</Link></List>  
                  <List><Link style={linkStyle} href="/shop">Shop</Link></List>  
            <List><Link style={linkStyle} href="/blog">Blog</Link></List>
          </Ul>
</Wrapper>
          <Box className='flex align-middle btn-group'>
              <Button className='contact-btn' type="button">Contact</Button>

        <Icon className="fa fa-search" aria-hidden="true"></Icon>

       <IconBox>
        <Bars className="fa fa-bars" aria-hidden="true"></Bars>
    </IconBox>
      </Box>
    </Container>
  )
}

export default Navbar