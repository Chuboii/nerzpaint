import EmailListInstance from "@/lib/models/emailist";
import connectDB from "@/lib/utils/db";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        connectDB()
        const isDataAvailable = await EmailListInstance.find()
        console.log(isDataAvailable)

        if (!isDataAvailable || isDataAvailable.length === 0) return NextResponse.json({
            data: "Email database appears to be empty"
        }, { status: 404 })
        
        return NextResponse.json({
            success: true,
            data: isDataAvailable
        }, {status:200})
    }
    catch (err: unknown) {
        if (err instanceof Error) {
            NextResponse.json({
                error: err,
                message: 'Something went wrong'
            }, {status:500})
        }
    }
}