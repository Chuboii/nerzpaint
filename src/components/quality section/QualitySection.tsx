import Image from 'next/image'
import {Container, Intro, ImageBoxLine, Text, WrapBox, Name, Desc,WrapText, Wrap,ImageBox, Box, Title} from './QualitySection.style'
import QualityCards from './quality cards/QualityCards'

const QualitySection = () => {
    return (
        <>
         <ImageBox>
        <Image src='/03.png' fill alt=""/>
      </ImageBox>
      <Container>
          <QualityCards />

          <Box>
              <Title>Welcome to Nerzpaints</Title>
            <Intro>Tired of using fake and ineffective paint prodducts?</Intro> 
            <ImageBoxLine>
              <Image src="/area-line.png" alt="" fill />
          </ImageBoxLine>
           <Wrap>
            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure minima amet quibusdam ea culpa nobis dolorum, suscipit molestiae error atque placeat dolor vel! Iusto repellat fugiat reiciendis eveniet! Maiores, blanditiis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit facere corrupti repudiandae, quas odio sint quis recusandae eaque esse, cupiditate molestiae debitis omnis, quaerat ipsa. Neque explicabo atque veritatis debitis!</Text>      
       
              <WrapBox>
           <ImageBox>
              <Image  src={'/founder.png'} fill alt='' />
                </ImageBox>

                <WrapText>
                  <Name>Rosalina William</Name>
                  <Desc>Founder of Nerzpaints</Desc>
                </WrapText>
           </WrapBox>     
            </Wrap>
        </Box>    
            </Container>
    </>
  )
}

export default QualitySection