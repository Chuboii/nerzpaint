import Image from 'next/image'
import ContactFormButton from '@/components/buttons/contact form btn/ContactFormButton'
import {Container, Wrapper,InputGroup, Title, SubText, Form, Textarea, Wrap, Label, Input, Icon, Span,FaqSection, ContactGroup, WrapContact, ImageBox, Text, Contact, FaqTitle, FaqText } from './Contact.style'
import ControlledAccordions from '@/components/accordion/Accordion'
import ScrollToTop from '@/components/scroll to top/ScrollToTop'
import { sendMail } from '@/lib/mail/mail'


const ContactPage = () => {
  return (
    <>
          <ScrollToTop />
        <meta name="Contact nerzpaints" content="Contact Nerzpaints" />
        <meta property="og:Contact Nerzpaints" content="My Open Graph Title" />
        <meta property="og:contact Nerzpaints - nerzpaints" content="view all nerzpaint paint products" />
        <meta name="keywords" content="paints contact information paint product home comfort painting painter" />
        <title>Contact Nerzpaints - nerzpaints</title>

      <Container>
        <Wrapper>
        <Title>{"Don't"} hesitate to <Span>reach out</Span></Title>
        <SubText>{"At Nerzpaints, we value open communication and are dedicated to providing exceptional customer service. Whether you have questions about our products, need assistance with an order, or want to explore partnership opportunities, we're here to help. Our contact page serves as a gateway for connecting with our team. Feel free to reach out to us using any of the methods below. We look forward to hearing from you and assisting you in any way we can."}

</SubText>
        </Wrapper>

        <Form>
          <Wrap>
            <Label>Full name</Label>
            <InputGroup>
            <Icon className="fa fa-user-circle-o" aria-hidden="true"></Icon>
            <Input placeholder="Your name" name="name" />
            </InputGroup>
          </Wrap>

          <Wrap>
            <Label>Email address</Label>
            <InputGroup>
            <Icon className="fa fa-mail-forward" aria-hidden="true"></Icon> 
            <Input placeholder="Your email" name="email"/>
              </InputGroup>
         </Wrap>

          <Wrap>
            <Label>Your Message</Label>
            <InputGroup>
            <Icon className="fa fa-comment" aria-hidden="true"></Icon> 
              <Textarea placeholder="Your message" name="message"></Textarea>
              </InputGroup>
          </Wrap>
          <ContactFormButton/>
        </Form>

        <ContactGroup>
          <WrapContact>
            <ImageBox>
            <Image src= "/01.svg" fill alt="nerzpaint address-image"/>
            </ImageBox>
            
            <Text>Office Address</Text>
            <Contact>No. 4 babatope bejide cresent lekki phase 1, off fola osibo</Contact>
          </WrapContact>

          <WrapContact>
            <ImageBox>
            <Image src= "/01.svg" fill alt="nerzpaint address-image"/>
            </ImageBox>
            
            <Text> Branch Address</Text>
            <Contact>No. 21 Bekwere wosy street D-line port harcourt</Contact>
          </WrapContact>

          <WrapContact>
            <ImageBox>
            <Image src= "/01.svg" fill alt="nerzpaint address-image"/>
            </ImageBox>
            
            <Text> Branch Address</Text>
            <Contact>No. 1 Ivara Esu str. off Ndidem Usang Iso Marian Rd. Calabar</Contact>
          </WrapContact>

          <WrapContact>
            <ImageBox>
            <Image src= "/02.svg" fill alt="nerzpaint email-image"/>
            </ImageBox>
            
            <Text> Email </Text>
            <Contact>nerzpaints@gmail.com</Contact>
          </WrapContact>

          <WrapContact>
            <ImageBox>
            <Image src= "/03.svg" fill alt="nerzpaint phone-image"/>
            </ImageBox>
            
            <Text> Phone</Text>
            <Contact>(+234) 813 8321 213</Contact>
          </WrapContact>
        </ContactGroup>

        <FaqSection>
          <FaqText>Our FAQ</FaqText>
          <FaqTitle>Got questions? {"We've"} got answers</FaqTitle>
      <ControlledAccordions/>
        </FaqSection>
      </Container>
    </>
  )
}

export default ContactPage