import { Container,Box, SwiperSlide, H4, Title, Wrapper, Wrap, Icon, Comment, Name, ImageBox } from '../Reviews.style'
import Image from 'next/image';

const imageStyle = {
    borderRadius:'50%'
}

const ReviewCards = () => {
  


    return (
    <>
  <Box>
                {/* <SwiperSlide>
                    <Wrap>
                        <Icon className="fa fa-quote-right"></Icon>
                <Comment>{"I'm so glad I chose Nerzpaint for my painting project. Their customer service was excellent, and the staff helped me select the perfect colors for my home. The paint quality is top-notch, and the results speak for themselves. My house looks fresh and modern, thanks to Nerzpaint's high-quality products!"}</Comment>
                <Name>Peter Kalu</Name>
                <ImageBox>
                    <Image style={imageStyle}  objectFit="cover" objectPosition="top" fill src={"/download (6).jpeg"} alt=''/>
                        </ImageBox>
                    </Wrap>
            </SwiperSlide> */}

        </Box>
        </>
  )
}

export default ReviewCards