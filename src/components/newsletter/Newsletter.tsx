'use client'
import { Form, Input, Button } from './Newsletter.style'
import {useState, useEffect, ChangeEvent} from 'react'
import Error from "@/components/toastify/Error";
import Success from "@/components/toastify/Success";


const Newsletter = () => {
    const [loading, setLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [message, setMessage] = useState('')
    const [reRenderError, setReRenderError] = useState(false)
    const [reRenderSuccess, setReRenderSuccess] = useState(false)
    const [email, setEmail] = useState('')

    const getEmailValue = (e: ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value)
    }

    const submitFormToDb = async () => {
        try {
            if (email) {
                setLoading(true)
               await fetch("/api/email/list/post", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email
                    })
                })
                setIsSuccess(true)
                setLoading(false)
                setMessage("You have successfully subscribed to our newsletter")
                setReRenderSuccess(!reRenderSuccess)
    
            }
            else {
                setIsError(true)
            
                setReRenderError(!reRenderError)
                setMessage("Make sure all fields are filled")
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
            <Form onSubmit={(e) => {
                e.preventDefault()
                submitFormToDb()
            }
            }>
    <Input type="email" onChange={getEmailValue} value={email} placeholder="Enter Email Address" />
    <Button>{loading ? "Subscribing... Please wait" : "Subscribe"}</Button>
            </Form>
        </>
  )
}

export default Newsletter