import Image from 'next/image'
import ContactFormButton from '@/components/buttons/contact form btn/ContactFormButton'
import {Container, Wrapper,InputGroup, Title, SubText, Form, Textarea, Wrap, Label, Input, Icon, Span,FaqSection, ContactGroup, WrapContact, ImageBox, Text, Contact, FaqTitle, FaqText } from './Contact.style'
import ControlledAccordions from '@/components/accordion/Accordion'


const ContactPage = () => {
  return (
    <>
      <Container>
        <Wrapper>
        <Title>{"Don't"} hesitate to <Span>reach out</Span></Title>
        <SubText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus similique animi sint ea cum, veritatis vero odit id corporis? Sapiente, qui facilis totam delectus cum cumque nisi doloribus voluptatum debitis?</SubText>
        </Wrapper>

        <Form>
          <Wrap>
            <Label>Full name</Label>
            <InputGroup>
            <Icon className="fa fa-user-circle-o" aria-hidden="true"></Icon>
            <Input placeholder="Your name" />
            </InputGroup>
          </Wrap>

          <Wrap>
            <Label>Email address</Label>
            <InputGroup>
            <Icon className="fa fa-mail-forward" aria-hidden="true"></Icon> 
            <Input placeholder="Your email" />
              </InputGroup>
         </Wrap>

          <Wrap>
            <Label>Your Message</Label>
            <InputGroup>
            <Icon className="fa fa-comment" aria-hidden="true"></Icon> 
              <Textarea placeholder="Your message"></Textarea>
              </InputGroup>
          </Wrap>
          <ContactFormButton/>
        </Form>

        <ContactGroup>
          <WrapContact>
            <ImageBox>
            <Image src= "/01.svg" fill alt="nerzpaint address-image"/>
            </ImageBox>
            
            <Text> Address</Text>
            <Contact>parker rd. allen, mexico</Contact>
          </WrapContact>

          <WrapContact>
            <ImageBox>
            <Image src= "/02.svg" fill alt="nerzpaint email-image"/>
            </ImageBox>
            
            <Text> Email </Text>
            <Contact>hello@gmail.com</Contact>
          </WrapContact>

          <WrapContact>
            <ImageBox>
            <Image src= "/03.svg" fill alt="nerzpaint phone-image"/>
            </ImageBox>
            
            <Text> Phone</Text>
            <Contact>(+234) 8909 290 0290</Contact>
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