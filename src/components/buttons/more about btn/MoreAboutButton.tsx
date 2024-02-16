'use client'
import { MoreButton,Icon } from './MoreAboutButton.style'
import { useRouter } from 'next/navigation'

const MoreAboutButton = () => {
    const router = useRouter()
    
    const navigateToAboutPage = () => router.push("/about")
  return (
    <MoreButton onClick={navigateToAboutPage}>More about us <Icon className="fa fa-arrow-right" aria-hidden="true"></Icon></MoreButton>  

  )
}

export default MoreAboutButton