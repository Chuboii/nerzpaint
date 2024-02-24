import { FC } from 'react'
import {FooterContainer,IconBox, Box, Icons, Header, Logo, Nav, Wrap, LinkWrap, Text, Form, Input, Button} from './Footer.style'
import Link from 'next/link'
import Newsletter from '../newsletter/Newsletter'

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
                   <Newsletter/>
                    </Wrap>
                </Header>

                <Nav>

      <LinkWrap>
        <Text>NEED HELP?</Text>
        <Link style={linkStyle} href="/contact">Contact Us</Link>
      </LinkWrap>
      <LinkWrap>
        <Text>USEFUl LINKS</Text>
        <Link style={linkStyle} href="/product-cards">Products</Link>
      </LinkWrap>
      <LinkWrap>
        <Text>ABOUT NERZPAINTS</Text>
        <Link style={linkStyle} href="/about">About us</Link>
              <Box>
                <a title='nerzpaint tiktok page' href="https://www.tiktok.com/@nerzpaints?_t=8jttOtZUxgD&_r=1">
              <IconBox>
              <Icons className="fa fa-linkedin" aria-hidden="true"></Icons>
          
                  </IconBox>
                </a>
                
              <a title='nerzpaint instagram page' href='https://www.instagram.com/nerz_paint?igsh=ZzRzdWxkMDUzczl4&utm_source=qr'>
                <IconBox>
                  <Icons className="fa fa-instagram" aria-hidden="true"></Icons>
                  </IconBox>
                </a>
              {/* <IconBox>
                <Icons className="fa fa-linkedin" aria-hidden="true"></Icons>
              </IconBox>
              <IconBox>
                <Icons className="fa fa-twitter" aria-hidden="true"></Icons>
           </IconBox> */}
              </Box>
                {/* <Link style={linkStyle} href="/snapcart-careers">Snapcart careers</Link>
        <Link style={linkStyle} href="/snapcart-express">Snapcart Express</Link> */}
      </LinkWrap>
      <LinkWrap>
        <Text>Resources</Text>
        <Link style={linkStyle} href="/reviews">Reviews</Link>
      </LinkWrap>
    </Nav>
        </FooterContainer>
        </>
    )
}

export default Footer