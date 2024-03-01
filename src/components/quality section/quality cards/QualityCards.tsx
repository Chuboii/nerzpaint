import {Container, WrapBox,Box, ImageBox, Card, Text, Icon } from './QualityCards.style'
import Image from 'next/image'




const QualityCards = () => {
  return (
      <Container>
          <Card>
              <Box>
              <ImageBox>
                  <Image src='/layers.png'alt='' fill/>
                  </ImageBox>
            </Box>
              <Text>Quality Paints</Text>

          </Card> 
          
          <Card>
              <Box>
          <ImageBox>
                  <Image src='/outline.png'alt='' fill/>
                  </ImageBox> 
            </Box>    
              <Text>Futuristic Designs</Text>

          </Card> 

          <Card>
              <Box>
          <ImageBox>
                  <Image src='/design.png'alt='' fill/>
                  </ImageBox>
                  
                </Box>
              
    <Text>New formulars </Text>


          </Card> 
    </Container>
  )
}

export default QualityCards