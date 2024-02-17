import { Container,Text, Title, Wrapper, Wrap, Icon, Comment, Name, ImageBox } from './Reviews.style'
import ReviewCards from './review cards/ReviewCards'



const Reviews = () => {
  return (
    <Container>
          <Title>What our customers said</Title>
          <ReviewCards/>
      </Container>
  )
}

export default Reviews