'use client'
import { useContext, useEffect, useState } from "react"
import { Button } from "./ReviewFormButton.style"
import Error from "@/components/toastify/Error";
import Success from "@/components/toastify/Success";
import axios from 'axios'
import { ProductContext } from "@/context/ProductContext";

type ReviewFormButtonType = {
    name: string;
    photoUrl: string;
    review: string;
    clearInputFields: () => void
}

const ReviewFormButton = ({name, photoUrl, review, clearInputFields}: ReviewFormButtonType) => {
    const [loading, setLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [message, setMessage] = useState('')
    const [reRenderError, setReRenderError] = useState(false)
    const [reRenderSuccess, setReRenderSuccess] = useState(false)
    const {setData, setReRender, reRender} = useContext(ProductContext)

    const submitFormToDb = async () => {
        try {
            if (name && review) {
                setLoading(true)
                
                const data = await axios.post("https://nerzpaints.com/api/reviews/post",{
                        name,
                        review
                    }
                )
                // setData(data.data)
                // console.log(data.data)
                setReRender(!reRender)
                setIsSuccess(true)
                setLoading(false)
                setMessage("You have successfully posted a review")
                clearInputFields()
                setReRenderSuccess(!reRenderSuccess)
    
            }
            else {
                setIsError(true)
            
                setReRenderError(!reRenderError)
                setMessage("Make sure all fields are filled or uploaded")
            }
        }
        catch (err: unknown) {
            if (err instanceof Error) {
                console.log(err)
                setMessage("Something went wrong... Try again")
                setIsError(true)
            }
        }
    }

  
    return (
        <>
            {isSuccess && <Success render={reRenderSuccess} message={message } />}
            {isError &&<Error render={reRenderError}  message={message } />}
        <Button onClick={submitFormToDb}>
            {loading ? "Submitting... Please wait" : "Submit"}     
            </Button>
        </>
  )
}

export default ReviewFormButton