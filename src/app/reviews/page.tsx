import ReviewForm from '@/components/review form/ReviewForm'
import { Container,Text, LineImageBox, Title, Wrapper, Wrap, Icon, Comment, Name, ImageBox } from './Reviews.style'
import ReviewCards from './review cards/ReviewCards'
import Image from 'next/image'
import { getReviewData } from './review cards/ReviewCards'


const Reviews = async () => {
  const reviews = await getReviewData()


  return (
    <Container>
             <Title>Post a review</Title>
          <LineImageBox>
                <Image src='/area-line.png'alt='' fill/>
      </LineImageBox>

      <ReviewForm/>
      
      {
        reviews && reviews.data !== undefined && reviews.data.length > 0 ?
        <>
        <Title>What our customers said</Title>
          <LineImageBox>
                <Image src='/area-line.png'alt='' fill/>
        </LineImageBox>
        </>
        : ""
      }
      <ReviewCards />
      </Container>
  )
}

export default Reviews