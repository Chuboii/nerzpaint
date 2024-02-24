'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container, H4, Title, Wrapper, Wrap, Icon, Comment, Name, ImageBox } from '../Reviews.style'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ReviewsDocType, getReviewData } from '@/app/reviews/review cards/ReviewCards';


const imageStyle = {
    borderRadius:'50%'
}

const ReviewSlider = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isMidDesktop, setIsMidDesktop] = useState(false)
    const [data, setData] = useState(null) as any[]
    
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


    useEffect(() => {
        const getDataFromReviews = async () => {
            const review = await getReviewData()
            setData(review.data)
        }
        
        getDataFromReviews()
},[])

    return (
    <>
<Swiper
    spaceBetween={40}
    slidesPerView={isMobile ? 1: isMidDesktop ? 2: 3}
>          
                {data && data !== undefined && data.length > 0 ? data.map((review: ReviewsDocType) => (
                    <SwiperSlide key={review._id}>
                        <Wrap>
                            <Icon className="fa fa-quote-right"></Icon>
                            <Comment>{review.review}</Comment>
                            <Name>{review.name}</Name>
                <ImageBox>
                                <Image style={imageStyle} objectFit="cover" objectPosition="top" fill src={review.photoUrl} alt={ `${review.name} images`} />
                        </ImageBox>
                    </Wrap>
                    </SwiperSlide>
                )) : ""
                }



            </Swiper>
        </>
  )
}

export default ReviewSlider