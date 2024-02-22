import ReviewInstance from "@/lib/models/review";
import connectDB from "@/lib/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        connectDB()
        const getAllReviews = await ReviewInstance.find()

        return NextResponse.json({
            success: 200,
            message: 'You have successfully retrieved all the reviews',
            data:getAllReviews
        }, {status:200})
    }
    catch (err: unknown) {
        if (err instanceof Error) {
            return NextResponse.json({
                success: 500,
                message: 'Something went wrong',
                error:err
            }, {status:500})
        }
    }
}