import Image from 'next/image'
import {Container, ImageBox, ImageBox2 } from './WelcomeImg.style'


const WelcomeImg = () => {
    return (
        <>
                <Container className='welcome-img-section'>

      <ImageBox2 className="thir-img-bx">
          <Image className='sub-img' src={'/5a2969df87bbb0.993868451512663519556.png'} fill alt='s'/>
      </ImageBox2>
            </Container>
        </>
  )
}

export default WelcomeImg