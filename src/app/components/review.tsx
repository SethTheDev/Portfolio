"use client"

import React, { useRef, useEffect } from "react"
import { animate } from "motion"

interface ReviewParams {
    avatar: string,
    name: string,
    description: string
}

export function Review({ avatar, name, description }: ReviewParams) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = ref.current

        const handleMouseEnter = () => {
            animate(element as Element, { scale: 1.2, rotate: 10 })
        }

        const handleMouseLeave = () => {
            animate(element as Element, { scale: 1, rotate: 0 })
        }

        const handleClick = () => {
            alert('btw it\'s πr²')
            element?.removeEventListener('mousedown', handleClick)
        }

        if(element) {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
            if (name === 'Nitlix') {
                element.addEventListener('mousedown', handleClick)
            }
        }
    })

    return (
        <div ref={ref} className="review">
            <div className="flex flex-row flex-wrap items-center gap-5">
                <img className="avatar" src={avatar} width="64" height="64"></img>
                <h2 className="text-2xl">{name}</h2>
            </div>
            <p className="text-xl pt-5">
                {description.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </p>
        </div>
    )
}