import { Container, Input, Textarea, Button, Wrap } from './ContactForm.style'


const ContactForm = () => {
  return (
      <>
          <Container>
              <Wrap>
              <Input placeholder="Name" autoComplete='true' type="text"/>
                  <Input placeholder="Email" autoComplete='true' type="email" />
              </Wrap>
              <Wrap>
              <Input placeholder="Phone" autoComplete='true' type="phone"/>
                  <Input placeholder="Subject" autoComplete='true' type="text" />
                </Wrap>
              <Textarea placeholder="Your Message"></Textarea>
              <Button type="button">Submit Message</Button>
          </Container>
      </>
  )
}

export default ContactForm