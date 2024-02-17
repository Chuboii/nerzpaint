'use client'
import Link from 'next/link'
import { Container, IconBox,Bars,Times,Wrapper, Logo,UlMobile, UlDesktop, Box, Icon, List, Button, Wrap } from './Navbar.style'
import {useState, useEffect, useCallback} from 'react'
import DarkBg from '../dark bg/DarkBg'
import {useRouter} from 'next/navigation'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isScreenScrolled, setIsScreenScrolled] = useState(false)
  const [enableNavbarMobile, setEnableNavbarMobile] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const [linkStyle, setLinkStyle] = useState({})

  const linkStyleMobile = {
    color:'black'
  }

  useEffect(() => {
    if (pathname === "/contact") {
      setLinkStyle({
        color: "black"
      })
    }
    else if (pathname === "/reviews") {
      setLinkStyle({
        color: "black"
      })
    }
    else if (pathname === "/product-cards") {
      setLinkStyle({
        color: "black"
      })
    }  
    else if (pathname === "/about") {
      setLinkStyle({
        color: "black"
      })
    }
    else {
      setLinkStyle({
        color: isScreenScrolled ? "black" : 'white'
      })
    }
  }, [pathname, isScreenScrolled])
  
  

 
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

  const scrollToContact = useCallback(() => {
     router.push("/contact")
  }, [router])


  return (
    <>
   
      {enableNavbarMobile && <DarkBg />}
      <Container bg={isScreenScrolled ? "white" : "transparent"} className="navbar flex justify-between align-middle">
         
      <Wrapper className='wrapper flex'>
            <Wrap className='flex'>
              <Link href="/"><Logo className="uppercase logo-name">Nerzpaints</Logo> </Link>
          </Wrap>     
        <UlMobile position={enableNavbarMobile ? "0" : "-50000px"} className='flex'>
      
        <IconBox>
          <Times onClick={disableNavbarMobileFunction} className="fa fa-times" aria-hidden="true"></Times>
          </IconBox>
             <List><Link style={linkStyleMobile} className="navbar-links" href="/">Home</Link></List>
              <List><Link  style={linkStyleMobile} className="navbar-links" href="/about">About</Link></List>
              {/* <List><Link style={linkStyle} className="navbar-links" href="/services">Services</Link></List> */}
              <List><Link  style={linkStyleMobile} className="navbar-links" href="/product-cards">Products</Link></List>  
                  <List><Link  style={linkStyleMobile} className="navbar-links" href="/reviews">Reviews</Link></List>  
            <List><Link  style={linkStyleMobile}  className="navbar-links" href="/contact">Contact</Link></List>

            <List><Link  style={linkStyleMobile}  className="navbar-links" href="/contact">Shop</Link></List>

          </UlMobile>



          <UlDesktop position={enableNavbarMobile ? "0" : "-50000px"} className='flex'>
      
      <IconBox>
        <Times onClick={disableNavbarMobileFunction} className="fa fa-times" aria-hidden="true"></Times>
        </IconBox>
           <List><Link style={linkStyle} className="navbar-links" href="/">Home</Link></List>
            <List><Link style={linkStyle} className="navbar-links" href="/about">About</Link></List>
            {/* <List><Link style={linkStyle} className="navbar-links" href="/services">Services</Link></List> */}
            <List><Link style={linkStyle} className="navbar-links" href="/product-cards">Products</Link></List>  
                <List><Link style={linkStyle} className="navbar-links" href="/reviews">Reviews</Link></List>  
          <List><Link style={linkStyle} className="navbar-links" href="/contact">Contact</Link></List>
{/* 
          <List><Link style={linkStyle} className="navbar-links" href="/shop">Shop</Link></List> */}

        </UlDesktop>
</Wrapper>
          <Box className='flex align-middle btn-group'>
              <Button onClick={scrollToContact} className='contact-btn' type="button">Contact</Button>

       
       <IconBox>
        <Bars onClick={enableNavbarMobileFunction} bg={isScreenScrolled ? "black" : "white"} className="fa fa-bars" aria-hidden="true"></Bars>
    </IconBox>
      </Box>
      </Container>
    </>
  )
}

export default Navbar