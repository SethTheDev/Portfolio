import { NextRequest, NextResponse } from "next/server";

export async function POST(
    req: NextRequest
) {
    try {
        const { name, message } = await req.json()
        console.log(`${name} : ${message}`)

        await fetch(
            process.env.WEBHOOK as string,
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
        console.error(`${process.env.WEBHOOK as string} \n${e}`)
        return NextResponse.json({
            success: false
        }, { status: 400 })
    }
}