import Link from 'next/link'
import { Container,Bars,Times,Wrapper, Logo, Box, Icon, List, Ul, Button, Wrap } from './Navbar.style'

const linkStyle = {
  color: '#727695'
}

const Navbar = () => {
  return (
      <Container className="navbar flex justify-between align-middle">
         
      <Wrapper className='wrapper flex'>
            <Wrap className='flex'>
              <Logo className="uppercase logo-name">Nerzpaints</Logo>
          </Wrap>     
        <Ul className='flex'>
          <Times className="fa fa-times" aria-hidden="true"></Times>
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
       
        <Bars className="fa fa-bars" aria-hidden="true"></Bars>
      
      </Box>
    </Container>
  )
}

export default Navbar