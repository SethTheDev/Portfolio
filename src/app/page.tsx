"use client"

import { useState, useEffect } from "react"
import { Button } from "./components/button"
import { Snake } from "./components/snake"
import { Developer } from "./components/developer"
import { AnimatePresence, motion } from "framer-motion"
import { Inter } from "next/font/google"
import { Fira_Code } from "next/font/google"
import { Rowdies } from "next/font/google"
import { Tool } from "./components/tool"
import { Preloader } from "./preloader"

const inter = Inter({ weight: "900", subsets: ["latin"] })
const fira = Fira_Code({ weight: "500", subsets: ["latin"] })
const name = Rowdies({ weight: '700', subsets: ["latin"] })

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false)
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Colombo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };

      const formattedTime = new Intl.DateTimeFormat('en-US', options).format(date);
      setTime(formattedTime);
    };
    updateTime();

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        { isLoading && <Preloader /> }
      </AnimatePresence>
      <main className="flex flex-col gap-40">
        <div className="flex flex-col w-full items-center justify-center gap-5">
          <h1 className="mt-32 text-center text-5xl w-5/6">Hey there! I&apos;m <i className={`not-italic text-primary ${name.className}`}>Python</i></h1>
          <p>A developer at best...</p>
          <div className="flex flex-row gap-5">
            <Button label="Contact Me" url="#contact" type />
            <Button label="Learn More" url="#info" />
          </div>
          <div className="mt-20 flex flex-row items-center gap-10">
            <motion.div
              whileHover={{ scale: 1.2 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              style={{
                marginTop: '25px',
                backgroundColor: 'white',
                borderRadius: '25px'
              }}
              className="flex flex-row"
            >
              <Snake isHovered={isHovered} />
            </motion.div>
            <p>(i have no idea what this is)</p>
          </div>
        </div>
        <div className="h-1 bg-gray-800" />
        <div className="flex flex-col gap-20 ml-10" id="info">
          <h1 className="text-4xl w-2/3">
            I&apos;m just your average <Developer />, with a knack for empowering creativity and fueling ideas.
          </h1>
          <div className="ml-10 flex flex-row gap-36 flex-wrap">
              <div className="flex flex-col">
                <h1 className={`text-primary text-5xl ${inter.className}`}>4+</h1>
                <h1 className="text-gray-300">Years of Experience</h1>
              </div>
              <div className="flex flex-col">
                <h1 className={`text-primary text-5xl ${inter.className}`}>10+</h1>
                <h1 className="text-gray-300">Coworkers and Employers</h1>
              </div>
              <div className="flex flex-col">
                <h1 className={`text-primary text-5xl ${inter.className}`}>100,000+</h1>
                <h1 className="text-gray-300">Lines of Code</h1>
                <h1 className="text-gray-300 text-[8px]">(and that&apos;s just an estimate)</h1>
              </div>
          </div>
        </div>
        <div className="h-1 bg-gray-800" />
        <div className="flex flex-col gap-20 mr-10">
          <div className="flex flex-col items-end text-right">
            <h1 className="text-6xl">The <i className={`not-italic text-primary ${inter.className}`}>Jetfuel</i>.</h1>
            <h1 className="text-xl w-4/5">Let&apos;s bring in the <i className={`not-italic text-primary ${inter.className}`}>BIG</i> guns. Take a look at what I use to shoot for the <i className={`not-italic text-primary ${inter.className}`}>stars</i>! ⭐</h1>
          </div>
          <div className="flex flex-row justify-center items-center flex-wrap gap-20 mx-10">
            <Tool name="Typescript" image="/v2/img/tools/typescript.png" />
            <Tool name="React" image="/v2/img/tools/react.png" />
            <Tool name="Java" image="/v2/img/tools/java.png" />
            <Tool name="Python" image="/v2/img/tools/python.png" />
            <Tool name="Discord.JS" image="/v2/img/tools/djs.png" />
            <Tool name="PostgreSQL" image="/v2/img/tools/postgres.png" />
          </div>
        </div>
        <div className="h-1 bg-gray-800" />
        <div className="flex flex-col items-center justify-center" id="contact">
          <h1 className="text-4xl">
            You know <i className={`not-italic text-primary ${inter.className}`}>where</i> to find me
          </h1>
          <Button label="Let&apos;s talk!" url="mailto:seth@thepython.me" type />
        </div>
        <div className="flex flex-row items-center justify-between bg-background h-16">
          <div className="ml-5 flex flex-row items-center gap-2">
              <h1>🌐</h1>
              <div className="flex flex-col text-xs">
                <h1>Colombo, LK</h1>
                <h1>{time}</h1>
              </div>
          </div>
          <h1 className="text-s">(c) ThePython 2024</h1>
          <div className="flex items-center border-primary border-2 p-2 rounded-xl mr-5">
            <a href="https://buymeacoffee.com/sethpython">☕Support Me!</a>
          </div>
        </div>
      </main>
    </>
  )
}