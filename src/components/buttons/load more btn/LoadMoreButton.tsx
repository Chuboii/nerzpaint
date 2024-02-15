'use client'
import { Button } from "./LoadMoreButton.style"
import { useRouter } from "next/navigation"


const LoadMoreButton = () => {
    const router = useRouter()
    
    const loadMoreProducts = () => {
        console.log("click")
        router.push("/products")
    }


  return (
    <Button onClick={loadMoreProducts}>Load More</Button>
  )
}

export default LoadMoreButton