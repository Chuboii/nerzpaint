import WelcomeButtons from '../welcome buttons/WelcomeButtons'
import './welcometext.scss'

const WelcomeText = () => {
  return (
      <section>
          <p className='motto'>Creativity & artistry</p>
          <h1 className='title'><span className="light">Exploring the world of</span> <span className="bold">Paint and Style</span></h1>
     <WelcomeButtons/>
      </section>
  )
}

export default WelcomeText