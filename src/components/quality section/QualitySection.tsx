import Image from 'next/image'
import {Container, Intro, ImageBoxLine, Text, WrapBox, Name, Desc,WrapText, Wrap,ImageBox, Box, Title} from './QualitySection.style'
import QualityCards from './quality cards/QualityCards'

const QualitySection = () => {
    return (
        <>
         {/* <ImageBox>
        <Image src='/03.png' fill alt=""/>
      </ImageBox> */}
      <Container>
          <QualityCards />

          <Box>
              <Title>Welcome to Nerzpaint</Title>
            <Intro>Tired of using fake and ineffective paint products?</Intro> 
            <ImageBoxLine>
              <Image src="/area-line.png" alt="" fill />
          </ImageBoxLine>
           <Wrap>
            <Text>Nerzpaint emerges as a dynamic force within the paint industry, offering a comprehensive range of solutions tailored for diverse needs. Specializing in interior and exterior paints, alongside a dedicated line of Marine paints, our company stands at the forefront of innovation and quality craftsmanship. With a commitment to excellence and customer satisfaction, Nerzpaint sets a new standard of reliability and performance in every brushstroke, making spaces come alive with vibrant colors and enduring beauty.</Text>      
       
              <WrapBox>

           </WrapBox>     
            </Wrap>
        </Box>    
            </Container>
    </>
  )
}

export default QualitySection