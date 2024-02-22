'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container, H4, Title, Wrapper, Wrap, Icon, Comment, Name, ImageBox } from '../Reviews.style'
import Image from 'next/image';
import { useEffect, useState } from 'react';


const imageStyle = {
    borderRadius:'50%'
}

const ReviewSlider = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isMidDesktop, setIsMidDesktop] = useState(false)

    useEffect(() => {
        const width = window.innerWidth

        if (width >=768 && width <= 1100) {
            setIsMobile(false)
            setIsMidDesktop(true)
        }
        else if(width >=768){
            setIsMobile(false)
            setIsMidDesktop(false)
        }
        else {
            setIsMobile(true)
            setIsMidDesktop(false)
        }
        
    }, [])


    return (
    <>
<Swiper
    spaceBetween={40}
    slidesPerView={isMobile ? 1: isMidDesktop ? 2: 3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
>          
{/* <SwiperSlide>
                    <Wrap>                <Icon className="fa fa-quote-right"></Icon>
                <Comment>{"I'm so glad I chose Nerzpaint for my painting project. Their customer service was excellent, and the staff helped me select the perfect colors for my home. The paint quality is top-notch, and the results speak for themselves. My house looks fresh and modern, thanks to Nerzpaint's high-quality products!"}</Comment>
                <Name>Peter Kalu</Name>
                <ImageBox>
                    <Image style={imageStyle}  objectFit="cover" objectPosition="top" fill src={"/download (6).jpeg"} alt=''/>
                        </ImageBox>
                    </Wrap>
            </SwiperSlide> */}



            </Swiper>
        </>
  )
}

export default ReviewSlider