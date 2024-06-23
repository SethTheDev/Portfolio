"use client"

import React, { useRef, useEffect } from "react"
import { animate } from "motion"
import Image from "next/image"

interface ProjectParams {
    name: string,
    banner: string,
    url: string
}

export function Project({ name, banner, url }: ProjectParams) {
    const ref = useRef<HTMLDivElement>(null)

    const handleClick = () => {
        window.open(url)
    }

    useEffect(() => {
        const element = ref.current

        const handleMouseEnter = () => {
            animate(element as Element, { scale: 1.2 })
        }

        const handleMouseLeave = () => {
            animate(element as Element, { scale: 1 })
        }

        if(element) {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        }
    })

    return (
        <div ref={ref} className="project flex flex-wrap justify-center items-center" onClick={handleClick}>
            <div className="min-w-64 h-64">
                <Image src={banner} alt={name} height={256} width={256}></Image>
            </div>
            <h2 className="text-2xl">{name}</h2>
        </div>
    )
}