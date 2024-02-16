'use client'
import { Button } from "./MarineLoadMoreButton.style"
import { useRouter } from "next/navigation"


const MarineLoadMoreButton = () => {
    const router = useRouter()
    
    const loadMoreProducts = () => {
        router.push("/product-cards/marine-paint/products")
    }


  return (
    <Button onClick={loadMoreProducts}>Load More</Button>
  )
}

export default MarineLoadMoreButton