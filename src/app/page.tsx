"use client"

import { useState } from "react"
import { Button } from "./components/button"
import { Snake } from "./components/snake"
import { Developer } from "./components/developer"
import { motion } from "framer-motion"
import { Inter } from "next/font/google"
import { Fira_Code } from "next/font/google"

const inter = Inter({ weight: "900", subsets: ["latin"] })
const fira = Fira_Code({ weight: "500", subsets: ["latin"] })

export default function Page() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <main className="flex flex-col gap-40">
      <div className="flex flex-col w-full items-center justify-center gap-5">
        <h1 className="mt-32 text-center text-5xl w-5/6">Hey there! I&apos;m <i className="not-italic text-primary">Python</i></h1>
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
        <h1 className="text-3xl">So what are you waiting for?</h1>
      </div>
      <div className="h-1 bg-gray-800" />
      <div className="flex flex-col items-center justify-center" id="contact">
        <h1 className="text-4xl">
          You know <i className="not-italic text-primary">where</i> to find me
        </h1>
        <Button label="Let&apos;s talk!" url="mailto:seth@thepython.me" type />
      </div>
      <div className="flex flex-row items-center justify-center bg-background h-20">
        <h1 className="">(c) ThePython 2024</h1>
      </div>
    </main>
  )
}