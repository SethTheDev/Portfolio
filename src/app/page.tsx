"use client"

import { useState, useRef, useEffect } from "react"
import { Holtwood_One_SC } from "next/font/google"
import Image from 'next/image'
import { motion } from "framer-motion"
import Typewriter, { TypewriterClass } from "typewriter-effect"

const holtwood = Holtwood_One_SC({ weight: "400", subsets: ["latin"] })

export default function Page() {
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)
    const audioRefSave = useRef<HTMLAudioElement | null>(null)
    const audioRefTitle = useRef<HTMLAudioElement | null>(null)
    const typewriterRef = useRef<TypewriterClass | null>(null)
    const [typeIndex, setTypeIndex] = useState(0)

    const onClickOpen = () => {
        if (audioRefSave.current) {
            audioRefSave.current.play().catch(() => {})
        }
        setShow(true)

        setTimeout(() => {
            if (audioRefTitle.current) {
                audioRefTitle.current.play().catch(() => {})
            }
        }, 1500);
    }

    const onClickDesc = () => {
        switch(typeIndex) {
            case 0:
                typewriterRef.current?.typeString('A fullstack developer :)').pasteString('<br />', null).start()
                setTypeIndex(typeIndex + 1)
                break 
            case 1:
                typewriterRef.current?.typeString('Welcome to my headspace!').start()
                setTypeIndex(typeIndex + 1)
                break
        }
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
                <div className="flex flex-row gap-20 flex-wrap justify-center items-center h-screen neighbor">
                    <div className="grid border-white border-2 bg-black inline-block h-64 w-[50rem] ml-20" onClick={onClickDesc}>
                        <div className="font-[omori] ml-2 text-7xl">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .changeDelay(25)
                                        .typeString('Hi there! I\'m Seth!')
                                        .pasteString('<br />', null)
                                        .start()
                                    typewriterRef.current = typewriter
                                }}
                                options={{
                                    cursor: '_',
                                    wrapperClassName: 'typewriter'
                                }}
                            />
                        </div>
                        <Image className="justify-self-end" src={'/img/omori/cursor.gif'} alt="cursor" width={80} height={20} />
                    </div>
                    <div className="grow" />
                    <div className="flex flex-col border-2 border-white mr-20">
                        <Image className="bg-black" src={'/img/omori/omori.webp'} alt="avatar" width={212} height={212} />
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
                </div>
                <div className="flex flex-col px-20 py-20 gap-20 h-screen">
                    <div className="flex flex-col w-min border-2 border-white">
                        <div className="bg-[#cfcfcf] border-2 border-black inline-block">
                            <h1 className="font-[omori] ml-2 text-8xl text-black font-bold">PROJECTS</h1>
                        </div>
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
                    <div className="select-none grid place-items-center h-screen headspace">
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