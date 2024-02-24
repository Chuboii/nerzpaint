import EmailListInstance from "@/lib/models/emailist";
import connectDB from "@/lib/utils/db";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    try {
        connectDB()
        const { email } = await request.json()
        const verifyEmailDuplicate = await EmailListInstance.find({ email })
        
        if (verifyEmailDuplicate.length > 0) return NextResponse.json({
            data: "Email already in use"
        }, { status: 401 })
        
        const createEmailList = new EmailListInstance({
            email
        })

        await createEmailList.save()

       return NextResponse.json({
            success: true,
            data: "Email has been sent to server successfully"
        })
    }
    catch (err: unknown){
        if (err instanceof Error) {
            NextResponse.json({
                error: err,
                message: 'Something went wrong'
            }, {status:500})
        }
    }
    
}