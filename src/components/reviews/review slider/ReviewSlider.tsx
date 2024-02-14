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
                <SwiperSlide>
                    <Wrap>                <Icon className="fa fa-quote-right"></Icon>
                <Comment>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque totam delectus, harum et modi impedit dolor magnam sapiente asperiores distinctio, veniam, similique non possimus necessitatibus laborum unde labore voluptate quos!</Comment>
                <Name>Alex Rapheal</Name>
                <ImageBox>
                    <Image style={imageStyle} fill src={"/images (13).jpeg"} alt=''/>
                        </ImageBox>
                    </Wrap>
            </SwiperSlide>

            <SwiperSlide>
                    <Wrap>                <Icon className="fa fa-quote-right"></Icon>
                <Comment>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque totam delectus, harum et modi impedit dolor magnam sapiente asperiores distinctio, veniam, similique non possimus necessitatibus laborum unde labore voluptate quos!</Comment>
                <Name>Alex Rapheal</Name>
                <ImageBox>
                    <Image style={imageStyle} fill src={"/images (13).jpeg"} alt=''/>
                        </ImageBox>
                    </Wrap>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Wrap>                <Icon className="fa fa-quote-right"></Icon>
                <Comment>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque totam delectus, harum et modi impedit dolor magnam sapiente asperiores distinctio, veniam, similique non possimus necessitatibus laborum unde labore voluptate quos!</Comment>
                <Name>Alex Rapheal</Name>
                <ImageBox>
                    <Image style={imageStyle} fill src={"/images (13).jpeg"} alt=''/>
                        </ImageBox>
                    </Wrap>
            </SwiperSlide>
            </Swiper>
        </>
  )
}

export default ReviewSlider