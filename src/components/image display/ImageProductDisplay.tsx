import Image from 'next/image'
import { Container,DarkBg, ImageBox, Icon} from './ImageProductDisplay.style'
import { GlobalStyles } from '@/app/globalStyles'

const imageStyles = {
    borderRadius:'20px'
}
const ImageProductDisplay = () => {



  return (
      <>
          <GlobalStyles overflow='hidden'/>
          <DarkBg></DarkBg>
          <Icon className="fa fa-times" aria-hidden="true"></Icon>
          <Container>
              <ImageBox>
                  <Image style={imageStyles} src="/WhatsApp Image 2024-02-20 at 15.01.38_0c1b61a3.jpg" alt='' fill/>
              </ImageBox>
      </Container>
      </>
  )
}

export default ImageProductDisplay