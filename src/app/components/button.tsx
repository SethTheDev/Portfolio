"use client"

import { Poppins } from "next/font/google"
import { motion } from "framer-motion"

const poppinsBold = Poppins({ weight: "600",  subsets: ["latin"] })

interface Params {
    label: string,
    url: string,
    type?: boolean
}

export function Button({ label, url, type }: Params) {
    return (
        <motion.div 
        className={`${poppinsBold.className} flex items-center justify-center mt-8 w-40 h-12 ${type ? 'bg-primary' : ''} border-primary border-2 rounded-xl `}
        whileHover={{
            scale: 1.1,
            backgroundColor: type ? 'var(--background)' : 'var(--primary)',
            borderColor: type ? 'var(--primary)' : 'var(--background)',
        }}
        >
            <a href={url}>
                {label}
            </a>
        </motion.div>
    )
}