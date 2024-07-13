import { NextRequest, NextResponse } from "next/server";
import { WebhookClient } from "discord.js";

export async function POST(
    req: NextRequest
) {
    try {
        const { name, message } = await req.json()
        const url = process.env.WEBHOOK_URL as string
        const client = new WebhookClient({ url: url })

        await client.send({ username: name, content: message })
        
        return NextResponse.json({
            success: true
        })
    } catch(e) {    
        return NextResponse.json({
            success: false
        })
    }
}