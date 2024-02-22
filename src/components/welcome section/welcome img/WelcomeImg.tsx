import Image from 'next/image'
import {Container, ImageBox1, ImageBox2 } from './WelcomeImg.style'

const imageStyles = {
    borderRadius:"50%"
}

const WelcomeImg = () => {
    return (
        <>
                <Container className='welcome-img-section'>

      <ImageBox1 className="thir-img-bx">
          <Image style={imageStyles} className='sub-img' src={'/WhatsApp Image 2024-02-20 at 15.01.38_0c1b61a3.jpg'} fill alt='s'/>
                </ImageBox1>
                
        
      <ImageBox2>
          <Image style={imageStyles} className='sub-img' src={'/WhatsApp Image 2024-02-20 at 15.01.37_a710a663.jpg'} fill alt='welcome image'/>
     </ImageBox2>
                
            </Container>
        </>
  )
}

export default WelcomeImg