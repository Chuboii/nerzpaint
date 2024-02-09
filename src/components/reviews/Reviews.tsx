import { Container, Title, Wrapper, Wrap, Icon, Comment, Name, ImageBox } from './Reviews.style'
import ReviewSlider from "./review slider/ReviewSlider"



const Reviews = () => {
  return (
      <Container>
          <Title>What our customers said</Title>
          <ReviewSlider/>
      </Container>
  )
}

export default Reviews