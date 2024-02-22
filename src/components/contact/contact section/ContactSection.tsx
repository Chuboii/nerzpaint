import Image from "next/image"
import ContactForm from "../contact form/ContactForm"
import { Container,Box,BoxWrap, Title, Wrapper, ImageBox } from './ContactSection.style'

const imageStyles = {
  borderRadius: '50%'
}

const ContactSection = () => {


  return (
      <Container>
          <Title>Need Help?</Title>
          <Wrapper>
              <ImageBox>   
                  <Box>
                  <Image style={imageStyles} src={"/WhatsApp Image 2024-02-20 at 15.01.37_a710a663.jpg"} alt="nerzpaints support contact image" fill/>
                  </Box>

                  <BoxWrap>
                  <Image style={imageStyles} src={"/WhatsApp Image 2024-02-20 at 15.01.38_a3440430.jpg"} alt="nerzpaint support contact image" fill />
        </BoxWrap>
              </ImageBox>
              <ContactForm />
            </Wrapper>
    </Container>
  )
}

export default ContactSection