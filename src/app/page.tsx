"use client"

import { useState, useRef, useEffect } from "react"
import { Holtwood_One_SC } from "next/font/google"
import { motion } from "framer-motion"

const holtwood = Holtwood_One_SC({ weight: "400", subsets: ["latin"] })

export default function Page() {
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [finished, setFinished] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    const onClickOpen = () => {
        setOpen(true)
    }

    const handleVideoEnd = () => {
        setFinished(true)

        if (audioRef.current) {
            audioRef.current.play().catch(() => {
                console.log("Audio blocked");
            });
        }
    }

    return (
        <>
            {open ? (
                <>
                <audio ref={audioRef}>
                    <source src="video/intro.mp3" type="audio/mpeg" />
                </audio>
                {!finished ? (
                    <video
                    className="fixed inset-0 w-full h-full object-cover"
                    autoPlay
                    playsInline
                    onEnded={handleVideoEnd}
                    >
                    <source src="video/intro.mp4" type="video/mp4" />
                    </video>
                ) : (
                    <>
                    <div className="vignette"></div>
                    <motion.div 
                    initial={{ backgroundColor: "#ffffff" }}
                    animate={{ backgroundColor: "#270a1b" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col h-screen"
                    >
                        <div className="flex items-center flex-row mt-4">
                            <div className="ml-5 bg-white w-1 h-[16rem]"></div>
                            <div className="flex flex-col py-20 px-10">
                                <motion.h1 
                                className="font-[VCR] text-6xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                >Hey there! I&apos;m</motion.h1>
                                <motion.h1 
                                className="font-[Karina] text-9xl"
                                animate={{ opacity: [1, 0.2, 1] }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    ease: "easeOut"
                                }}
                                >Seth</motion.h1>
                            </div>
                        </div>
                    </motion.div>
                    </>
                    
                )}
                </>
            ) : (
                <div className="grid place-items-center h-screen">
                    <div className="cursor-pointer border-2 rounded-xl border-white px-10 py-10">
                        <h1 onClick={onClickOpen} className={`select-none animate-pulse text-3xl text-center ${holtwood.className}`}>Click Here to Enter</h1>
                    </div>
                </div>
            )}
        </>
    )
}