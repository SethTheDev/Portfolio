import type { NextApiRequest } from "next";
import { Webhook } from "@ly-nld/dishook";
import { NextResponse } from "next/server";

const hook = new Webhook(process.env.WEBHOOK_URL as string)

export async function POST(
    req: NextApiRequest
) {
    try {
        const { name, message } = req.body
        hook.setUsername(name).setContent(`Hey <@866510980225040466>, ${name} says ${message}`).send()
        return NextResponse.json({
            success: true
        })
    } catch(e) {    
        return NextResponse.json({
            success: false
        })
    }
}