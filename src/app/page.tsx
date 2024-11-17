"use client"

import { useState } from "react"
import { Button } from "./components/button"
import { Snake } from "./components/snake"
import { motion } from "framer-motion"

export default function Page() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <main className="flex items-center justify-center">
      <div className="flex flex-col w-full items-center justify-center gap-5">
        <h1 className="mt-32 text-center text-5xl w-5/6">Hey there! I&apos;m <i className="not-italic text-primary">Python</i></h1>
        <p>A developer at best...</p>
        <div className="flex flex-row gap-5">
          <Button label="Contact Me" url="#contact" type />
          <Button label="Learn More" url="#info" />
        </div>
        <div className="flex flex-row items-center gap-10">
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
    </main>
  )
}