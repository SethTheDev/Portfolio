"use client"

import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

interface ReviewParams {
    avatar: string,
    name: string,
    description: string,
    socials?: string[][]
}

const variants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 }
}

export function Review({ avatar, name, description, socials }: ReviewParams) {
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible")
        }
    }, [control, inView])

    return (
        <motion.div
         ref={ref}
         className="review" 
         whileHover={{
            scale: 1.1,
            rotate: 10,
            backgroundColor: '#212121'
         }}
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
            <div className="flex flex-row flex-wrap gap-4 mt-2">  
                {socials ? socials.map((social) => (
                    <motion.div
                    className="w-16 h-10 rounded-xl border-violet-600 border-2 text-violet-600 flex items-center justify-center"
                    whileHover={{
                        backgroundColor: '#7C3AED',
                        color: '#fff'
                    }}
                    key={social[0]}
                    onClick={() => window.open(social[1])}
                    >
                        {social[0]}
                    </motion.div>
                )) : ""}
            </div>
        </motion.div>
    )
}