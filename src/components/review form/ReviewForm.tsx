import connectDB from '@/lib/utils/db'
import {Container, Group, Span, Input, Textarea, Button } from './ReviewForm.style'

connectDB()
const ReviewForm = () => {
  return (
    <> 
     <Container>
              <Group>
                  <Input placeholder="Full name" />
              </Group>
              <Group>
                  <Span>Uploading...</Span>
                  <Input type="file" />
              </Group>
              <Group>
                  <Textarea placeholder="Write your review here"> </Textarea>
              </Group>
              
              <Button>Submit</Button>
    </Container>
   </>
  )
}

export default ReviewForm