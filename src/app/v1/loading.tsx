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

export default function LoadingScreen() {
    const [index, setIndex] = useState(0)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % fonts.length);
        }, 125);

        return () => clearInterval(interval)
    })

    return (
        <div ref={ref} className={`loading bg-black fixed size-full`}>
            <h1 className={`loading-text ${fonts[index].className} center text-9xl fixed`}>Loading</h1>
        </div>
    )
}