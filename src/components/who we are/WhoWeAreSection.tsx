import MoreAboutButton from '../buttons/more about btn/MoreAboutButton'
import { Container, Wrapper, Title, Text, Grid, Wrap, Span, Count} from './WhoWeAreSection.style'


const WhoWeAreSection = () => {
  return (
      <>
          <Container>
        <Wrapper>
          <Title>Who we are?</Title>
    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quos debitis laborum iusto, eum expedita facere ab aut porro veniam ipsum voluptas id nam? Vero iure totam quam consequatur eum!</Text>
      <MoreAboutButton/>
        </Wrapper>

        <Grid>
          <Wrap>
            <Span>Products {`we've`} made</Span>
            <Count>10K
            </Count>
          </Wrap>

          <Wrap>
            <Span>Community members</Span>
            <Count>100K
            </Count>
          </Wrap>

          <Wrap>
            <Span>Satisfied customers</Span>


            
            <Count>940+
            </Count>
          </Wrap>

          <Wrap>
            <Span>Year founded</Span>
            <Count>2017
            </Count>
          </Wrap>
        </Grid>
      </Container>
      </>
  )
}

export default WhoWeAreSection