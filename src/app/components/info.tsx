"use client"

import { useState, useEffect, useRef } from "react"

interface InfoParams {
    text: string,
    speed: number
}

export function Info({ text, speed }: InfoParams) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [start, setStart] = useState(false);
    const ref = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStart(true);
        }, 2000);
        return () => clearTimeout(startTimeout);
    }, []);

    useEffect(() => {
        if (start && index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(displayedText + text[index]);
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [index, text, speed, displayedText, start]);

    return (
        <p className="text-base" ref={ref}>
            {displayedText}
        </p>
    )
}