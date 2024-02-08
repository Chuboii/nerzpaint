import WelcomeImg from "./welcome img/WelcomeImg"
import WelcomeText from "./welcome text/WelcomeText"
import './welcomesection.scss'

const WelcomeSection = () => {
  return (
      <section className="container flex align-middle justify-between">
          <WelcomeText />
         <WelcomeImg/>
    </section>
  )
}

export default WelcomeSection