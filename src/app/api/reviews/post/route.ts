import ReviewInstance from "@/lib/models/review";
import connectDB from "@/lib/utils/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        connectDB()
        const { name, review, photoUrl } = await request.json();
        
        const createReviewInDb = new ReviewInstance({
            name,
            review,
            photoUrl
        })

        const data = await createReviewInDb.save();
        
        return NextResponse.json({
            message: 'You have successfully created a new review',
            data
        }, {status:200})
    }
    catch (err: unknown) {
        if (err instanceof Error) {
            return NextResponse.json({
                success: 500,
                message: 'Something went wrong',
                error: err
            }, {status:500})
        }
    }
}