import { FC } from 'react'
import {FooterContainer,IconBox, Box, Icons, Header, Logo, Nav, Wrap, LinkWrap, Text, Form, Input, Button} from './Footer.style'
import Link from 'next/link'

const linkStyle = {
    color: "#eee",
    margin: '.3rem 0'
}

const Footer: FC = () => {

    return (
        <>
            <FooterContainer>
                <Header>
                    <Logo>NERZPAINTS</Logo>

                    <Wrap>
                        <Text>NEW TO NERZPAINT?</Text>
                        <Text>Subscribe to our newsletter to get updates on our latest products!</Text>
                        <Form>
                            <Input placeholder="Enter Email Address" />
                            <Button>Subscribe</Button>
                    </Form>
                    </Wrap>
                </Header>

                <Nav>

      <LinkWrap>
        <Text>NEED HELP?</Text>
        <Link style={linkStyle} href="/chat">Chat with us</Link>
        <Link style={linkStyle} href="/contact-us">Contact Us</Link>
      </LinkWrap>
      <LinkWrap>
        <Text>USEFUl LINKS</Text>
        <Link style={linkStyle} href="/service-center">Products</Link>
        <Link style={linkStyle} href="/how-to-shop">Shop</Link>
        <Link style={linkStyle} href="/delivery-options">Delivery options and timelines</Link>
      </LinkWrap>
      <LinkWrap>
        <Text>ABOUT NERZPAINTS</Text>
        <Link style={linkStyle} href="/about-us">About us</Link>
              <Box>
              <IconBox>
              <Icons className="fa fa-facebook" aria-hidden="true"></Icons>
                </IconBox>
                <IconBox>
                  <Icons className="fa fa-instagram" aria-hidden="true"></Icons>
              </IconBox>
              <IconBox>
                <Icons className="fa fa-linkedin" aria-hidden="true"></Icons>
              </IconBox>
              <IconBox>
                <Icons className="fa fa-twitter" aria-hidden="true"></Icons>
           </IconBox>
              </Box>
                {/* <Link style={linkStyle} href="/snapcart-careers">Snapcart careers</Link>
        <Link style={linkStyle} href="/snapcart-express">Snapcart Express</Link> */}
      </LinkWrap>
      <LinkWrap>
        <Text>Resources</Text>
        <Link style={linkStyle} href="/sell-on-snapcart">Blog</Link>
        <Link style={linkStyle} href="/vendor-hub">Reviews</Link>
      
      </LinkWrap>
    </Nav>
        </FooterContainer>
        </>
    )
}

export default Footer