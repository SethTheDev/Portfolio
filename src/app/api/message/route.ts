import { NextRequest, NextResponse } from "next/server";

export async function POST(
    req: NextRequest
) {
    try {
        const { name, message } = await req.json()

        await fetch(
            process.env.WEBHOOK_URL as string,
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: name,
                    content: message
                })
            }
        )
        
        return NextResponse.json({
            success: true
        })
    } catch(e) {    
        return NextResponse.json({
            success: false
        })
    }
}