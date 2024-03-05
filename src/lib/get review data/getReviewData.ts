import axios from 'axios'


export const getReviewData = async () => {
    try {
        const data = await axios.get("https://nerzpaints.com/api/reviews/get")
        
        return data.data
    }

    catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err)
        }
    }
}