"use client"

import { useState } from "react"

export default function Page() {
  const [color, setColor] = useState('#F96079')

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl">Greetings!</h1>
        <h1 className="text-4xl">I&apos;m <i className={`text-[${color}]`}>Seth</i></h1>
      </div>
    </div>
  )
}