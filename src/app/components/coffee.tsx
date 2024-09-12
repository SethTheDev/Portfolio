import { motion } from "framer-motion"
import Image from "next/image"

export function Coffee() {
    return (
        <motion.a
        className="bg-white w-fit inline-block p-2 rounded-[15px]"
        whileHover={{
            backgroundColor: '#FFDD00'
        }}
        >
            <Image
            src="/img/coffee/coffee.png"
            alt="buymeacoffee"
            width={167}
            height={37}
            ></Image>
        </motion.a>
    )
}