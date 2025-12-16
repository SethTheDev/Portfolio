"use client"

import { useState, useRef, useEffect } from "react"
import { Holtwood_One_SC } from "next/font/google"
import Image from 'next/image'
import { motion, cancelFrame, frame } from "framer-motion"
import Typewriter, { TypewriterClass } from "typewriter-effect"
import ReactLenis, { useLenis } from "lenis/react"
import type { LenisRef } from "lenis/react"
import { Avatar } from "./component/avatar"
import { Review } from "./component/review"

const holtwood = Holtwood_One_SC({ weight: "400", subsets: ["latin"] })

export default function Page() {
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)
    const audioRefSave = useRef<HTMLAudioElement | null>(null)
    const audioRefTitle = useRef<HTMLAudioElement | null>(null)
    const audioRefBuzzer = useRef<HTMLAudioElement | null>(null)
    const audioRefWorldEnd = useRef<HTMLAudioElement | null>(null)
    const typewriterRef = useRef<TypewriterClass | null>(null)
    const typewriter2Ref = useRef<TypewriterClass | null>(null)
    const [typedFlight, setTypedFlight] = useState(false)
    const [pressedFight, setPressedFight] = useState(false)
    const [typeIndex, setTypeIndex] = useState(0)
    const lenisRef = useRef<LenisRef>(null)
    const [hoverIndex, setHoverIndex] = useState(0)

    const [mopi, setMopi] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://api.vaultcord.com/webhooks/public-lookup/1022189106614243350");
                const data = await res.json();
                setMopi(`https://cdn.discordapp.com/avatars/1022189106614243350/${data.avatar}`)
            } catch (err) {
                console.error(err)
            }
        }

        fetchData()
    }, [])

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
            case 2:
                typewriterRef.current?.changeDeleteSpeed(0.2).deleteChars(24).typeString('Okay now scroll down!').start()
                setTypeIndex(typeIndex + 1)
                break
        }
    }

    const onClickFlight = () => {
        audioRefBuzzer.current?.play()
        if (!typedFlight) {
            typewriter2Ref.current?.typeString('I choose FIGHT!').start()
            setTypedFlight(true)
        } else {
            typewriter2Ref.current?.changeDeleteSpeed(0.2).deleteAll().typeString('I choose FIGHT!').start()
        }
    }

    const onClickFight = () => {
        if (!pressedFight) {
            audioRefTitle.current?.pause()
            audioRefWorldEnd.current?.play()
            setPressedFight(true)
        }

        if(!typedFlight) {
            typewriter2Ref.current?.typeString('That\'s what I bring to the table!').start()
            setTypedFlight(true)
        } else {
            typewriter2Ref.current?.changeDeleteSpeed(0.2).deleteAll().typeString('That\'s what I bring to the table!').start()
        }
    }

    useEffect(() => {
        function update(data: { timestamp: number }) {
            const time = data.timestamp 
            lenisRef.current?.lenis?.raf(time)
        }

        frame.update(update, true)

        return () => cancelFrame(update)
    }, [])

    return (
        <>
            <ReactLenis root
                options={{
                    autoRaf: false,
                }}
                ref={lenisRef}
            />
            <audio ref={audioRefSave}>
                <source src="audio/omori/save.ogg" type="audio/ogg" />
            </audio>
            <audio ref={audioRefTitle}>
                <source src="audio/omori/title.mp3" type="audio/mpeg" />
            </audio>
            <audio ref={audioRefBuzzer}>
                <source src="audio/omori/buzzer.ogg" type="audio/ogg" />
            </audio>
            <audio ref={audioRefWorldEnd}>
                <source src="audio/omori/worldend.mp3" type="audio/mpeg" />
            </audio>
            {open ? (
                <>
                <div className="fixed z-20 w-full flex justify-center">
                    <div className="w-1/2 border-2 border-black">
                        <div className="flex flex-row px-20 justify-between border-4 border-white bg-black">
                            <motion.div className="flex flex-row items-center" onHoverStart={() => setHoverIndex(1)} onHoverEnd={() => setHoverIndex(0)}>
                                <a href={"#"} className="font-[omori] text-4xl">HOME</a>
                                <Image className="h-min" alt="cursor" style={{ opacity: hoverIndex == 1 ? 1 : 0 }} src="/img/omori/cursor.gif" width={80} height={20} />
                            </motion.div>
                            <motion.div className="flex flex-row items-center" onHoverStart={() => setHoverIndex(2)} onHoverEnd={() => setHoverIndex(0)}>
                                <a href={"#skills"} className="font-[omori] text-4xl">SKILLS</a>
                                <Image className="h-min" alt="cursor" style={{ opacity: hoverIndex == 2 ? 1 : 0 }} src="/img/omori/cursor.gif" width={80} height={20} />
                            </motion.div>
                            <motion.div className="flex flex-row items-center" onHoverStart={() => setHoverIndex(3)} onHoverEnd={() => setHoverIndex(0)}>
                                <a href={"#review"} className="font-[omori] text-4xl">REVIEWS</a>
                                <Image className="h-min" alt="cursor" style={{ opacity: hoverIndex == 3 ? 1 : 0 }} src="/img/omori/cursor.gif" width={80} height={20} />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-20 flex-wrap justify-center items-center h-screen neighbor">
                    <div className="grid border-white border-2 bg-black inline-block h-64 w-[50rem] ml-20 cursor-pointer" onClick={onClickDesc}>
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
                <div id="skills" className="relative w-screen h-screen overflow-hidden">
                    <div className="absolute inset-0 -z-10 pointer-events-none h-full">
                        <div className="flex flex-col h-screen items-center justify-center">
                            <div className="flex flex-row">
                                <Image alt="java" src={"/img/omori/java.png"} width={150} height={150} />
                                <Image alt="cpp" src={"/img/omori/cpp.jpg"} width={150} height={150} />
                            </div>
                            <div className="flex flex-row">
                                <Image alt="js" src={"/img/omori/js.jpg"} width={150} height={150} />
                                <Image alt="py" src={"/img/omori/python.png"} width={150} height={150} />
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 flex flex-col h-screen justify-center">
                        <div className="flex flex-row justify-center px-20 py-10 gap-20">
                            <Avatar name={"Java"} img={"/img/omori/aubrey.webp"} red={"5 YEARS"} blue={"20+ PROJECTS"} />
                            <motion.div 
                            className="flex flex-col w-max border-2 border-black grow h-min"
                            >
                                <div className="bg-black border-4 border-white pr-20 pb-4 inline-block font-[omori] text-5xl text-white">
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter
                                                .changeDelay(25)
                                                .typeString('Take a look at my skills...')
                                                .pasteString('<br />', null)
                                                .start()
                                            typewriter2Ref.current = typewriter
                                        }}
                                        options={{
                                            cursor: '_',
                                            wrapperClassName: 'typewriter'
                                        }}
                                    />
                                </div>
                            </motion.div>
                            <Avatar name={"C++"} img={"/img/omori/hero.webp"} red={"4 YEARS"} blue={"5000+ LINES"} />
                        </div>
                        <div className="flex flex-row justify-center px-20 py-10 gap-20">
                            <Avatar name={"Python"} img={"/img/omori/omori.webp"} red={"6 YEARS"} blue={"AI/ML"} />
                            <div className="grid grid-cols-1 grid-rows-3 align-items-end gap-4 grow self-end">
                                <motion.div className="flex items-center justify-center border-4 border-white bg-[#cf2342] h-16 w-full cursor-pointer" whileHover={{backgroundColor: '#ff1322'}} onClick={onClickFight}>
                                    <div className="grow" />
                                    <h1 className="font-[omori] text-6xl text-center text-white font-black"> FIGHT </h1>
                                    <div className="grow" />
                                    <Image className="h-min" src={'/img/omori/cursor.gif'} alt="cursor" width={160} height={40} />
                                </motion.div>
                                <motion.div className="flex items-center justify-center border-4 border-white bg-[#4223cf] h-16 w-full cursor-pointer" whileHover={{backgroundColor: '#2213ff'}} onClick={onClickFlight}>
                                    <div className="grow" />
                                    <h1 className="font-[omori] text-6xl text-center text-white font-black"> OR FLIGHT? </h1>
                                    <div className="grow" />
                                    <Image className="" src={'/img/omori/cursor.gif'} alt="cursor" width={160} height={40} />
                                </motion.div>
                            </div>
                            <Avatar name={"JS/TS"} img={"/img/omori/kel.webp"} red={"3 YEARS"} blue={"REACT/NEXT/BUN"} />
                        </div>
                    </div>
                </div>
                <div id="review" className="flex flex-col gap-32 items-center mb-20">
                    <div className="bg-black border-4 border-white pr-20 pb-4 inline-block">
                        <h1 className="ml-4 font-[omori] text-5xl text-white">Trusted by Professionals!</h1>
                    </div>
                    <div className="flex px-2 flex-row gap-0 bg-[#aaaaaa] h-[36rem] w-[70%]">
                        <div className="paper flex flex-col justify-between bg-white w-full h-full">
                            <Review name={"Microwave"} img={"https://cdn.discordapp.com/avatars/1037268731568586753/208b89b5633c841a040bfd699135c4a5.png"} message={"Seriously talented, he knows what he's doing and he's passionate about it. I respect that."} reverse={false} />
                            <Review name={"Maelstrom"} img={"https://cdn.discordapp.com/avatars/162216643370418176/a_592fb15076fb9fd96fc793592455aad2.gif"} message={"A close friend and a modern day tech prodigy"} reverse={true} />
                        </div>
                        <div className="bg-black w-[2px] h-full"></div>
                        <div className="paper flex flex-col justify-between bg-white w-full h-full">
                            <Review name={"Vinuu"} img={"https://ca.slack-edge.com/E09V59WQY1E-U08R6ME1880-e571617cd659-512"} message={"Seth's a really cool person talk too. A really awesome friend too. Super talented and would def recommend him for any project ❤️!!"} reverse={false} />
                            <Review name={"Korudo"} img={"https://cdn.discordapp.com/avatars/682984308776239134/f12690adde3c160a806a13fda5e3c5a5.png"} message={"shit man"} reverse={true} />
                        </div>
                    </div>
                    <div className="flex px-2 flex-row gap-0 bg-[#afafaf] h-[36rem] w-[70%]">
                        <div className="paper flex flex-col justify-between bg-white w-full h-full">
                            <Review name={"MUD1"} img={"https://cdn.discordapp.com/avatars/982179680318783498/e6ddb2283d4d9e54b4822dbfca6129d8.png"} message={"A versatile programmer with experience across multiple fields"} reverse={false} />
                            <Review name={"Mopi"} img={mopi} message={"play omori"} reverse={true} />
                        </div>
                        <div className="bg-black w-[2px] h-full"></div>
                        <div className="paper flex flex-col justify-between bg-white w-full h-full">
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
                            <div onClick={onClickOpen} className="grid cursor-pointer border-2 bg-black border-white inline-block pl-4 pt-2 w-96 h-20">
                                <h1 className={`select-none text-3xl font-[omori]`}>Click here to enter.</h1>
                                <Image className="justify-self-end" src={'/img/omori/cursor.gif'} alt="cursor" width={80} height={20} />
                            </div>
                        </div> 
                    </div>
                </>
            )}
        </>
    )
}