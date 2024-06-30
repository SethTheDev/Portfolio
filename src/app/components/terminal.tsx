"use client"

import React from "react"
import { Nunito } from "next/font/google"
import Typewriter from "typewriter-effect"

const nunito = Nunito({ weight: "200", subsets: ["latin"] })
const nunitoTitle = Nunito({ weight: "800", subsets: ["latin"] })

export function Terminal() {
    return (
        <div className={`terminal rounded-3xl p-5 min-w-100 m-0 ${nunito.className}`}>
            <div className={`${nunitoTitle.className} flex flex-row items-center justify-between cursor-default`}>
                <strong className="flex-grow text-center">kitty - /usr/bin/zsh</strong>
                <strong><i className="not-italic text-lime-400">&#95;</i> <i className="not-italic text-yellow-500">&#x25A2;</i> <i className="not-italic text-rose-700">&times;</i></strong>
            </div>
            <div className="flex flex-row flex-wrap">
                <strong className={nunitoTitle.className}>~ /&gt;&emsp;</strong>
                <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .changeDelay('natural')
                        .pauseFor(3)
                        .typeString('echo Hello World')
                        .pauseFor(0.5)
                        .deleteAll()
                        .typeString('javaw -jar thepython.jar')
                        .pauseFor(1)
                        .deleteAll()
                        .typeString('python -m pip install thepython')
                        .pauseFor(0.75)
                        .deleteAll()
                        .typeString('bun run dev')
                        .pauseFor(1)
                        .deleteAll()
                        .typeString('neofetch')
                        .pauseFor(1.25)
                        .deleteAll()
                        .start()
                }}
                options={{
                    loop: true
                }}
                />
            </div>
        </div>
    )
}