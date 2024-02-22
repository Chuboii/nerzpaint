import ReviewForm from '@/components/review form/ReviewForm'
import { Container,Text, LineImageBox, Title, Wrapper, Wrap, Icon, Comment, Name, ImageBox } from './Reviews.style'
import ReviewCards from './review cards/ReviewCards'
import Image from 'next/image'



const Reviews = () => {
  return (
    <Container>
             <Title>Post a review</Title>
          <LineImageBox>
                <Image src='/area-line.png'alt='' fill/>
      </LineImageBox>

      <ReviewForm/>
      
          <Title>What our customers said</Title>
          <LineImageBox>
                <Image src='/area-line.png'alt='' fill/>
          </LineImageBox>    
      <ReviewCards />
      </Container>
  )
}

export default Reviews