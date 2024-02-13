import WelcomeImg from "./welcome img/WelcomeImg"
import WelcomeText from "./welcome text/WelcomeText"
import { Container,Bg } from './WelcomeSection.style';


const WelcomeSection = () => {
  return (
<>
<Bg></Bg>
      <Container className="containerr flex align-middle justify-between">

      <WelcomeText />
         <WelcomeImg/>
      </Container>
      </>
  )
}

export default WelcomeSection