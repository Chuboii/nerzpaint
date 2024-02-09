import Image from "next/image"
import ContactForm from "../contact form/ContactForm"
import { Container,Box,BoxWrap, Title, Wrapper, ImageBox } from './ContactSection.style'
const ContactSection = () => {


  return (
      <Container>
          <Title>Need Help?</Title>
          <Wrapper>
              <ImageBox>   
                  <Box>
                  <Image src={"/home_three_layer_1.png"} alt="" fill/>
                  </Box>

                  <BoxWrap>
                  <Image src={"/home_three_layer_2.png"} alt="" fill />
        </BoxWrap>
              </ImageBox>
              <ContactForm />
            </Wrapper>
    </Container>
  )
}

export default ContactSection