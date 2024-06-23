"use client"

import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

interface ReviewParams {
    avatar: string,
    name: string,
    description: string
}

const variants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
    hovered: { scale: 1.2, rotate: 10, transition: { duration: 0.2 } },
    not_hovered: { scale: 1, rotate: 0, transition: { duration: 0.2 } }
}

export function Review({ avatar, name, description }: ReviewParams) {
    const control = useAnimation()
    const [ref, inView] = useInView()

    const handleMouseEnter = () => {
        control.start("hovered")
    }

    const handleMouseLeave = () => {
        control.start("not_hovered")
    }

    useEffect(() => {
        if (inView) {
            control.start("visible")
        }
    }, [control, inView])

    return (
        <motion.div
         ref={ref}
         className="review" 
         onMouseEnter={handleMouseEnter} 
         onMouseLeave={handleMouseLeave}
         variants={variants}
         initial="hidden"
         animate={control}
         >
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
        </motion.div>
    )
}