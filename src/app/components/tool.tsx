import Image from "next/image"
import { motion } from "framer-motion"

interface Params {
    name: string,
    image: string,
}

export function Tool({ name, image }: Params) {
    return (
        <motion.div className="flex flex-col rounded-3xl justify-center items-center gap-10 text-center bg-item w-64 h-64"
        whileHover={{
            backgroundColor: '#202020'
        }}
        >
            <Image 
            className="rounded-xl"
            alt={name}
            src={image}
            width='72'
            height='72'
            />
            <h1 className="text-3xl">{name}</h1>
        </motion.div>
    )
}