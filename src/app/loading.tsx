"use client"

import { useState, useEffect, useRef } from "react"
import { Poppins, Oswald, Fira_Sans, Roboto, Dancing_Script, Playfair_Display, Bebas_Neue, Libre_Baskerville, Outfit, Lobster, Shadows_Into_Light, Merriweather_Sans } from "next/font/google"
import Image from "next/image"
import { animate } from "motion"

const poppins = Poppins({ weight: "600", subsets: ["latin"] })
const oswald = Oswald({ weight: "600", subsets: ["latin"] })
const fira = Fira_Sans({ weight: "600", subsets: ["latin"] })
const roboto = Roboto({ weight: "500", subsets: ["latin"] })
const dancing = Dancing_Script({ weight: "600", subsets: ["latin"] })
const playfair = Playfair_Display({ weight: "600", subsets: ["latin"] })
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })
const libre = Libre_Baskerville({ weight: "400", subsets: ["latin"] })
const outfit = Outfit({ weight: "600", subsets: ["latin"] })
const lobster = Lobster({ weight: "400", subsets: ["latin"] })
const shadows = Shadows_Into_Light({ weight: "400", subsets: ["latin"] })
const merriweather = Merriweather_Sans({ weight: "600", subsets: ["latin"] })

const fonts = [poppins, oswald, fira, roboto, dancing, playfair, bebas, libre, outfit, lobster, shadows, merriweather]

interface LoadingParams {
    hidden: boolean,
    logo: boolean
}

export default function LoadingScreen({ hidden, logo }: LoadingParams) {
    const [index, setIndex] = useState(0)
    const [anim, setAnim] = useState(false)
    const [divHidden, setDivHidden] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % fonts.length);
        }, 125);

        if (hidden && !anim) {
            setAnim(true)
            const element = ref.current
            if (element) {
                animate(element, { opacity: 0 }, { duration: 1 })
                    .finished
                    .then(() => {
                        setDivHidden(true)
                    })
            }
        }

        return () => clearInterval(interval)
    })

    return (
        <div ref={ref} className={`loading bg-black fixed size-full ${divHidden ? 'hidden' : ''}`}>
            <h1 className={`${fonts[index].className} center text-9xl fixed ${logo ? 'hidden' : ''}`}>Loading</h1>
            <Image
            src="/img/logo/logo.png"
            alt="Seth"
            width={500}
            height={500}
            className={`fixed center ${logo ? '' : 'hidden'}`}
            ></Image>
        </div>
    )
}