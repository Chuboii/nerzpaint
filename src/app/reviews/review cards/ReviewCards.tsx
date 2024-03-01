'use client'
import { Container, Box, SwiperSlide, H4, Title, Wrapper, Wrap, Icon, Comment, Name, ImageBox } from '../Reviews.style'
import Image from 'next/image';
import axios from 'axios'
import { useContext, useEffect } from 'react';
import { ProductContext } from '@/context/ProductContext';
import { getReviewData } from '@/lib/get review data/getReviewData';


const imageStyle = {
    borderRadius:'50%'
}

export type ReviewsDocType = {
    name: string;
    photoUrl: string;
    review: string;
    _id: number;
    id: number;
}

const ReviewCards = () => {
    const { data, setData, reRender} = useContext(ProductContext)
    
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getReviewData()
                
                console.log(data)
                setData(data)

            }
            catch (err) {
                if (err instanceof Error) {
                    console.log(err)
                }
            }
        }

        getData()
    }, [reRender])

    return (
    <>
            <Box>
                {data && data.data !== undefined && data.data.length > 0 ?  data.data.map((review: ReviewsDocType) => (
                    <SwiperSlide key={review._id}>
                        <Wrap>
                            <Icon className="fa fa-quote-right"></Icon>
                            <Comment>{review.review }</Comment>
                            <Name>{review.name}</Name>
                            <ImageBox>
                                <Image style={imageStyle} objectFit="cover" objectPosition="top" fill src={review.photoUrl} alt={`${review.name} image`} />
                            </ImageBox>
                        </Wrap>
                    </SwiperSlide> 
                )): ""
                }
        </Box>
        </>
  )
}

export default ReviewCards