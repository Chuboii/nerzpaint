import { getReviewData } from '@/lib/get review data/getReviewData'
import ReviewForm from '../review form/ReviewForm'
import { Container,Text, Title, Wrapper, Wrap, Icon, Comment, Name, ImageBox } from './Reviews.style'
import ReviewSlider from "./review slider/ReviewSlider"


const Reviews = async () => {
  const reviews = await getReviewData()


  return (
    <Container>
      <Text>Reviews</Text>
      {
        reviews && reviews.data !== undefined && reviews.data.length > 0 &&
        <Title> What our customers said</Title>
        
      }
      <ReviewSlider />
      
      <Title>Post a review</Title>
      <ReviewForm/>
      </Container>
  )
}

export default Reviews