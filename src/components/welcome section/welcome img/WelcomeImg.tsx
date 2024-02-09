import Image from 'next/image'
import {Container, ImageBox, ImageBox2 } from './WelcomeImg.style'


const WelcomeImg = () => {
    return (
        <>
                <Container className='welcome-img-section'>
      <ImageBox className='img-box'>
          <Image className='img' src={'/toppng.com-3d-paint-splash-png-510x411.png'} fill alt='s'/>
      </ImageBox>

      {/* <ImageBox2 className="thir-img-bx">
          <Image className='sub-img' src={'/png-transparent-multicolored-paint-illustration-paint-splash-watercolor-painting-ink-color-splash-thumbnail-removebg-preview.png'} fill alt='s'/>
      </ImageBox2> */}
            </Container>
        </>
  )
}

export default WelcomeImg