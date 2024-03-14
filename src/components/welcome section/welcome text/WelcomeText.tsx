import WelcomeButtons from '../welcome buttons/WelcomeButtons'
import {Container,Bold, Text, Title, Wrap, Span, SubText } from './WelcomeText.style'

const WelcomeText = () => {
  return (
      <Container className="w-t-section">
        {/*  <Text className='motto'>Creativity & artistry</Text>*/}
          <Title className='title'>
              <Wrap>
                <Span className="light">Painting the future </Span>
            </Wrap>
            {/*<Bold className="bold">
               The Best Painting company
              </Bold>*/}
          </Title>
          <SubText className="w-p">An exclusive paint retail brand</SubText>
     <WelcomeButtons/>
      </Container>
  )
}

export default WelcomeText
