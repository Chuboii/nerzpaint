'use client'
import { useRouter } from 'next/navigation'
import './welcomebtn.scss'

const WelcomeButtons = () => {
  const router = useRouter()
  
  const navigateToProduct = () => router.push("/product-cards")

  const navigateToAbout = () => router.push("/about")


  return (
      <div className='btn-groupp'>
          <button onClick={navigateToAbout} className='btn' type="button"><span className="text">Learn More </span>
              <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
          <button onClick={navigateToProduct} className='btn' type="button">
           <i className="fa fa-play" aria-hidden="true"></i>
           <span className='text'>Our Products</span>
          </button>
    </div>
  )
}

export default WelcomeButtons