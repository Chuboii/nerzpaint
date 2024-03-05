'use client'
import {useState, ChangeEvent, useEffect, useContext, useRef} from 'react'
import { Container, Group, Span, SpanWords, Input, P,Textarea } from './ReviewForm.style'
import { storage } from '@/lib/firebase/firebase'
import ReviewFormButton from '../buttons/review form btn/ReviewFormButton'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid'


// type DownloadUrlType = {
//   downloadURL?: string;
// }

const ReviewForm = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    message: ""
  })
  const [photoUrl, setPhotoUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null);
  const [maxLength, setMaxLength] = useState(false)
  const [messageWords, setMessageWords] = useState(0)



  useEffect(() => {

    if (formDetails.message.length <= 500) {
      setMaxLength(true)
      setMessageWords(c => c + 1)
    }
    else {
      setMaxLength(false)
    }

    
  }, [formDetails.message])

  // useEffect(() => {
  //  console.log(ref.current)
  // }, [])

  const enableInputValues = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormDetails(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));

    if (e.target.name === 'message') {
      console.log(e)
    }
  }

 



  const extractPhotoUrl = async (e:  ChangeEvent<HTMLInputElement> ) => {
    try {
      const file = e.target.files?.[0]
      
      if (!file) return;
      setLoading(true)
      setLoaded(false)
  
      const storageRef = ref(storage, `photo ${uuidv4()}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on('state_changed', 
  (snapshot) => {
 
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    switch (snapshot.state) {
      case 'paused':
        break;
      case 'running':
        break;
    }
  }, 
  (error) => {
    
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setLoaded(true)
      setPhotoUrl(downloadURL)
    });
  }
);
    
    }
    catch (err: unknown) {
      console.log(err)
    }
  }
  
  const clearInputFields = () => {
    setFormDetails({
      name: '',
      message:""
    })
    setPhotoUrl("")
    setLoading(false)

    if (fileRef.current) {
      fileRef.current.value = ""
    }
  }

 

  return (
    <> 
     <Container onSubmit={(e) => e.preventDefault()}>
              <Group>
                  <Input onChange={enableInputValues} value={formDetails.name} placeholder="Full name" name="name"/>
              </Group>
              <Group>
                  
         <Span display={loading ? "block" : "none"}>
            {loaded ? "image uploaded" :
              "Uploading..."
              }
          </Span> 
          {/* <P>Add an avatar</P>
            <Input ref={fileRef} onChange={extractPhotoUrl} name="photoUrl" type="file" />
           */}
              </Group>
              <Group>
                  <Textarea maxLength={maxLength ? 500 : 2000} name="message" value={formDetails.message} onChange={enableInputValues} placeholder="Write your review here"/>
             <SpanWords>{messageWords}/500 </SpanWords>      
        </Group>
        <ReviewFormButton clearInputFields={clearInputFields} name={formDetails.name} photoUrl={photoUrl} review={formDetails.message} />
    </Container>
   </>
  )
}

export default ReviewForm