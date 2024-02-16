'use client'
import { Button } from "./HomeLoadMoreButton.style"
import { useRouter } from "next/navigation"


const HomeLoadMoreButton = () => {
    const router = useRouter()
    
    const loadMoreProducts = () => {
        router.push("/product-cards/home-paint/products")
    }


  return (
    <Button onClick={loadMoreProducts}>Load More</Button>
  )
}

export default HomeLoadMoreButton