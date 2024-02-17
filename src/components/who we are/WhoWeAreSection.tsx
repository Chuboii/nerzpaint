import MoreAboutButton from '../buttons/more about btn/MoreAboutButton'
import { Container, Wrapper, Title, Text, Grid, Wrap, Span, Count} from './WhoWeAreSection.style'


const WhoWeAreSection = () => {
  return (
      <>
          <Container>
        <Wrapper>
          <Title>Who we are?</Title>
    <Text>Nerzpaint is new and fast rising paint company that deals on interior and exterior paints as well as Marine paints</Text>
      <MoreAboutButton/>
        </Wrapper>

        <Grid>
          <Wrap>
            <Span>Products {`we've`} made</Span>
            <Count>100+
            </Count>
          </Wrap>

          <Wrap>
            <Span>Community members</Span>
            <Count>1K
            </Count>
          </Wrap>

          <Wrap>
            <Span>Satisfied customers</Span>


            
            <Count>940+
            </Count>
          </Wrap>

          <Wrap>
            <Span>Year founded</Span>
            <Count>2023
            </Count>
          </Wrap>
        </Grid>
      </Container>
      </>
  )
}

export default WhoWeAreSection