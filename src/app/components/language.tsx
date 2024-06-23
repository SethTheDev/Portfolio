"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { animate } from "motion"

interface LanguageParams {
    name: string,
    img: string,
    yrs: string
}

export function Language({ name, img, yrs }: LanguageParams) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = ref.current

        const handleMouseEnter = () => {
            animate(element as Element, { skewY: -5, scale: 0.8, animationPlayState: 0 })
        }

        const handleMouseLeave = () => {
            animate(element as Element, { skewY: 0, scale: 1, animationPlayState: 1 })
        }

        if(element) {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        }
    })

    return (
        <div ref={ref} className="language text-center">
            <Image src={img} alt={name} height={256} width={256}></Image>
            <h2>{name}</h2>
            <p>{yrs}</p>
        </div>
    )
}
