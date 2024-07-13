import type { NextApiRequest, NextApiResponse } from "next";
import { Webhook } from "@ly-nld/dishook";

const hook = new Webhook(process.env.WEBHOOK_URL as string)

type ResponseData = {
    success: boolean,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
        const { name, message } = req.body
        hook.setUsername(name).setContent(`Hey <@866510980225040466>, ${name} says ${message}`).send()
        res.status(200).json({
            success: true
        })
    } catch(e) {    
        res.status(400).json({
            success: false
        })
    }
}