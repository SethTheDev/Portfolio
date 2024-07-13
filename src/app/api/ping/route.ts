import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type ResponseData = {
    message: string,
}

export async function GET(
    req: NextApiRequest
) {
    if (req.method === 'GET') {    
        return NextResponse.json({
            message: "testing owo rawr"
        })
    }
}