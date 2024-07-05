"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface LanguageParams {
    name: string,
    img: string
}

export function Language({ name, img }: LanguageParams) {
    return (
        <motion.div 
        className="language text-center"
        whileHover={{
            backgroundColor: '#171717'
        }}
        >
            <div className="flex flex-row items-center">
                <Image src={img} alt={name} height={64} width={64} className="rounded-sm"></Image>
                <h2 className="ml-5 text-xl">{name}</h2>
            </div>
        </motion.div>
    )
}
