import { Container,Box, SwiperSlide, H4, Title, Wrapper, Wrap, Icon, Comment, Name, ImageBox } from '../Reviews.style'
import Image from 'next/image';

const imageStyle = {
    borderRadius:'50%'
}

export type ReviewsDocType = {
    name: string;
    photoUrl: string;
    review: string;
    _id: number;
}
export const getReviewData = async () => {
    try {
        const data = await fetch("https://www.nerzpaints.com/api/reviews/get", {
            next: {
                revalidate:1000
            }
        })
        return data.json()
    }

    catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err)
        }
    }
}

const ReviewCards = async () => {
    const reviews = await getReviewData()

    return (
    <>
            <Box>
                {reviews && reviews.data !== undefined && reviews.data.length > 0 ?  reviews.data.map((review: ReviewsDocType) => (
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