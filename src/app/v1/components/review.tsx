"use client"

import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"

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
            {
                name === 'Mopi' ? (
                    <div><br /><a href='https://estrogen.monster/'><img alt='mopi!' src='https://estrogen.monster/assets/mopi.jpg' /></a></div>
                ) :
                name === 'Foreverably' ? (
                    <img src="https://cdn.discordapp.com/emojis/1268181274854686720.gif?size=128&quality=lossless" />
                ) : ""
            }
            <div className="flex flex-row flex-wrap items-center gap-4 mt-2">  
                {socials ? socials.map((social) => (
                    <motion.div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    whileHover={{
                        scale: 1.15
                    }}
                    key={social[0]}
                    onClick={() => window.open(social[1])}
                    >
                        <Image
                        src={`/img/socials/${social[0].toLowerCase()}.png`}
                        width={72}
                        height={72}
                        alt={social[0]}
                        className="rounded-full"
                        ></Image>
                    </motion.div>
                )) : ""}
            </div>
        </motion.div>
    )
}