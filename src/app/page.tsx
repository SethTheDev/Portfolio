"use client"

import { useState, useRef, useEffect } from "react"
import { Holtwood_One_SC } from "next/font/google"
import Image from 'next/image'
import { motion } from "framer-motion"

const holtwood = Holtwood_One_SC({ weight: "400", subsets: ["latin"] })

export default function Page() {
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false);
    const audioRefSave = useRef<HTMLAudioElement | null>(null)
    const audioRefTitle = useRef<HTMLAudioElement | null>(null)

    const onClickOpen = () => {
        if (audioRefSave.current) {
            audioRefSave.current.play().catch(() => {})
        }
        setShow(true)

        setTimeout(() => {
            if (audioRefTitle.current) {
                audioRefTitle.current.play().catch(() => {})
            }
        }, 3000);
    }

    return (
        <>
            <audio ref={audioRefSave}>
                <source src="audio/omori/save.ogg" type="audio/ogg" />
            </audio>
            <audio ref={audioRefTitle}>
                <source src="audio/omori/title.mp3" type="audio/mpeg" />
            </audio>
            {open ? (
                <>
                <div className="flex flex-row gap-20 items-center h-screen">
                    <div className="flex flex-col ml-20">
                        <Image className="" src={'/img/omori/omori.webp'} alt="avatar" width={159} height={159} />
                        <div className="flex flex-col border-2 border-black">
                            <div className="bg-[#cfcfcf] inline-block">
                                <h1 className="font-[omori] ml-2 text-2xl text-black font-bold">SETH</h1>
                            </div>
                            <div className="border-2 border-black level inline-block h-8">
                                <h1 className="font-[omori] ml-2 text-2xl text-white">LVL. 16</h1>
                            </div>
                            <div className="bg-[#cfcfcf] px-2 py-2">
                                <div className="bg-[#fe3227] h-7 rounded-lg border-2 border-black">
                                    <h1 className="font-[omori] ml-2 text-xl font-bold mr-2 text-right">INFP-T</h1>
                                </div>
                            </div>
                            <div className="bg-[#cfcfcf] px-2 py-2">
                                <div className="bg-[#00afa8] h-7 rounded-lg border-2 border-black">
                                    <h1 className="font-[omori] ml-2 text-xl font-bold mr-2 text-right">ADHD</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid border-white border-2 bg-black inline-block h-32 w-100">
                        <h1 className="font-[omori] ml-2 text-5xl">Hi there! I&apos;m Seth!</h1>
                        <Image className="justify-self-end" src={'/img/omori/cursor.gif'} alt="cursor" width={80} height={20} />
                    </div>
                </div>
                </>
            ) : (
                <>
                    <motion.div
                    className="fixed inset-0 bg-black pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: show ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    onAnimationComplete={() => { if(show) setOpen(true) }}
                    />
                    <div className="grid place-items-center h-screen headspace">
                        <div className="border-2 border-black">
                            <div className="grid cursor-pointer border-2 bg-black border-white inline-block pl-4 pt-2 w-96 h-20">
                                <h1 onClick={onClickOpen} className={`select-none text-3xl font-[omori]`}>Click here to enter.</h1>
                                <Image className="justify-self-end" src={'/img/omori/cursor.gif'} alt="cursor" width={80} height={20} />
                            </div>
                        </div> 
                    </div>
                </>
            )}
        </>
    )
}