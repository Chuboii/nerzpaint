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
                <Comment>{"I'm so glad I chose Nerzpaint for my painting project. Their customer service was excellent, and the staff helped me select the perfect colors for my home. The paint quality is top-notch, and the results speak for themselves. My house looks fresh and modern, thanks to Nerzpaint's high-quality products!"}</Comment>
                <Name>Peter Kalu</Name>
                <ImageBox>
                    <Image style={imageStyle}  objectFit="cover" objectPosition="top" fill src={"/download (6).jpeg"} alt=''/>
                        </ImageBox>
                    </Wrap>
            </SwiperSlide>

            <SwiperSlide>
                    <Wrap>                <Icon className="fa fa-quote-right"></Icon>
                <Comment>{"Nerzpaint's products are simply fantastic! I recently painted my kitchen cabinets with their specialty paints, and the transformation was incredible. The paint dried quickly to a smooth, hard finish, and it has held up remarkably well to daily wear and tear. I'm thrilled with the results and would recommend Nerzpaint to anyone looking for high-quality paints."}</Comment>
                <Name>Christian Moses</Name>
                <ImageBox>
                    <Image style={imageStyle} objectFit="cover" objectPosition="top" fill src={"/images (4).jpeg"} alt=''/>
                        </ImageBox>
                    </Wrap>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Wrap>                <Icon className="fa fa-quote-right"></Icon>
                <Comment>{"As a professional painter, I've tried many brands, but Nerzpaint stands out for its superior quality and ease of application. The paint goes on smoothly and evenly, resulting in a flawless finish every time. Clients are always delighted with the results, and I trust Nerzpaint to deliver consistent performance on every project."}</Comment>
                <Name>Brian Rapheal</Name>
                <ImageBox>
                    <Image style={imageStyle} objectFit="cover" objectPosition="top" fill src={"/images (3).jpeg"} alt=''/>
                        </ImageBox>
                    </Wrap>
                </SwiperSlide>

                <SwiperSlide>
                    <Wrap>
                        <Icon className="fa fa-quote-right"></Icon>
                        <Comment>{"I recently used Nerzpaint's exterior paints for my house, and I couldn't be happier with the results. The paint provided excellent protection against the elements, and the colors have remained bright and fade-resistant even after months of exposure to sun and rain. I'm impressed by the durability and quality of Nerzpaint's products!"}
                            <Name>Nicky Bianca</Name>
                        </Comment>
                <ImageBox>
                    <Image style={imageStyle} objectFit="cover" objectPosition="top" fill src={"/download (4).jpeg"} alt=''/>
                        </ImageBox>
                    </Wrap>
                </SwiperSlide>

                <SwiperSlide>
                    <Wrap>
                        <Icon className="fa fa-quote-right"></Icon>
                <Comment>{"Nerzpaint's "}interior paints exceeded my expectations! The colors are rich and vibrant, and the coverage is exceptional. My rooms look stunning, and the paint has held up beautifully over time. I highly recommend Nerzpaint for anyone looking to transform their home.</Comment>
                <Name>Chloe Mitchelle</Name>
                <ImageBox>
                    <Image style={imageStyle} objectFit="cover" objectPosition="top" fill src={"/download (5).jpeg"} alt=''/>
                        </ImageBox>
                    </Wrap>
                </SwiperSlide>
            </Swiper>
        </>
  )
}

export default ReviewSlider