import Image from "next/image"
import { Josefin_Sans } from "next/font/google"
import { motion } from "framer-motion"

interface SocialParams {
    platform: string,
    username: string,
    url: string
}

const title = Josefin_Sans({ weight: "700", subsets: ["latin"] })

export function Social({ platform, username, url } : SocialParams) {
    const onClick = () => {
        window.open(url)
    }

    return (
        <motion.div
        className="social flex flex-row pl-8 cursor-pointer"
        onClick={onClick}
        whileHover={{
            scale: 1.2,
            backgroundColor: "#212121"
        }}
        >
            <Image
            className="bg-white rounded-full"
            src={`/img/social/${platform.toLowerCase()}.png`}
            alt={username}
            width={64}
            height={64}
            ></Image>
            <h1 className={`text-3xl pl-5 pt-4 ${title.className}`}>{username}</h1>
        </motion.div>
    )
}