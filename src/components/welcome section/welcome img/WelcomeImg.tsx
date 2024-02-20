import Image from 'next/image'
import {Container, ImageBox, ImageBox2 } from './WelcomeImg.style'


const WelcomeImg = () => {
    return (
        <>
                <Container className='welcome-img-section'>

      <ImageBox2 className="thir-img-bx">
          <Image className='sub-img' src={'/WhatsApp Image 2024-02-20 at 15.01.38_0c1b61a3.jpg'} fill alt='s'/>
      </ImageBox2>
            </Container>
        </>
  )
}

export default WelcomeImg