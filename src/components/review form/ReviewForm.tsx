'use client'
import {useState, ChangeEvent, useEffect, useContext, useRef} from 'react'
import { Container, Group, Span, SpanWords, Input, Textarea } from './ReviewForm.style'
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

  const enableInputValues = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormDetails(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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
      setTimeout(() => {
        setLoading(false)
      }, 2000)
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
            <Input ref={fileRef} onChange={extractPhotoUrl} name="photoUrl" type="file" />
          
              </Group>
              <Group>
                  <Textarea maxLength={500} name="message" value={formDetails.message} onChange={enableInputValues} placeholder="Write your review here"/>
             <SpanWords>500 words max</SpanWords>      
        </Group>
        <ReviewFormButton clearInputFields={clearInputFields} name={formDetails.name} photoUrl={photoUrl} review={formDetails.message} />
    </Container>
   </>
  )
}

export default ReviewForm