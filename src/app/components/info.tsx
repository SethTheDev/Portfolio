"use client"

import { useState, useEffect, useRef } from "react"

interface InfoParams {
    text: string,
    speed: number
}

export function Info({ text, speed }: InfoParams) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const ref = useRef<HTMLParagraphElement>(null)

    const onHover = () => {
        const element = ref.current
        if(element) {
            console.log(`${index} : ${text.length}`)
            if(index >= displayedText.length) {
                if(!element.innerHTML.endsWith('>')) {
                    element.innerHTML += ' <i>(possibly)</i>'
                }
            }
        }
    }

    const onLeave = () => {
        const element = ref.current
        if(element) {
            element.innerHTML = element.innerHTML.slice(0, element.innerHTML.length - 18)
        }
    }

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(displayedText + text[index]);
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [index, text, speed, displayedText]);

    return (
        <p className="info" ref={ref} onMouseOver={onHover} onMouseLeave={onLeave}>
            {displayedText}
        </p>
    )
}