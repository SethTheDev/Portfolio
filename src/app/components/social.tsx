"use client"

import { useRef, useEffect } from "react"
import { animate } from "motion"

interface SocialParams {
    name: string,
    url: string,
    username: string
}

export function Social({ url, name, username }: SocialParams) {
    const handleClick = () => {
        window.open(url)
    }

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = ref.current

        const handleMouseEnter = () => {
            animate(element as Element, { scale: 1.5 })
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
        <div ref={ref} className={`social ${name} items-center flex flex-row`} onClick={handleClick}>
            <h2 className="username text-xl">{username}</h2>
        </div>
    )
}