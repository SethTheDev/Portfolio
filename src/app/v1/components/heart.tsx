"use client"

import { animate, spring } from "motion"
import { useRef } from "react"

export function Heart() {
    const ref = useRef<HTMLObjectElement>(null)

    const onClick = async () => {
        const element = document.querySelector('.heart')

        element?.setAttribute('style', 'visibility: visible;')
        await animate(element as Element, { scale: 1, opacity: 1 }).finished.then(() => {
            setTimeout(() => {
                animate(element as Element, { x: 1050 }, { easing: spring({ damping: 4, stiffness: 25 }) }).finished.then(() => {
                    animate(element as Element, { scale: 0.5, opacity: 0, x: 0 }, { duration: 0.01 })
                    element?.setAttribute('style', 'visibility: hidden;')
                })
            }, 1000)
        })
    }

    return (
        <strong ref={ref} className="text-rose-700 cursor-pointer" onClick={onClick}>&#9829;</strong>
    )
}