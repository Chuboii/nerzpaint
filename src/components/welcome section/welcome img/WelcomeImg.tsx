import Image from 'next/image'
import './welcomeimg.scss'

const WelcomeImg = () => {
  return (
      <div className='img-box'>
          <Image src={'/5a2969df87bbb0.993868451512663519556.png'} fill alt='s'/>
    </div>
  )
}

export default WelcomeImg