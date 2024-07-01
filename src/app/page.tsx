"use client"

import { Info } from "./components/info";
import { Language } from "./components/language";
import { Terminal } from "./components/terminal";
import { Review } from "./components/review";
import { Project } from "./components/project";
import { Heart } from "./components/heart";
import { Social } from "./components/social"
import React, { useEffect, useState } from "react";
import { Dancing_Script } from "next/font/google";
import Image from "next/image"
import LoadingScreen from "./loading";
import Marquee from "react-fast-marquee"

const dancingscript = Dancing_Script({ weight: "700", subsets: ["latin"] })

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [logo, setLogo] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLogo(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }, 3000)
  })

  const languages = [
    ["Java", "/img/lang/java.png"],
    ["Python", "/img/lang/python.png"],
    ["Javascript", "/img/lang/javascript.png"],
    ["Typescript", "/img/lang/typescript.png"],
    ["HTML/CSS", "/img/lang/htmlcss.png"],
  ]

  const frameworks = [
    ["React", "/img/framework/react.png"],
    ["NextJS", "/img/framework/nextjs.png"],
    ["Discord.JS", "/img/framework/discordjs.png"],
    ["PaperMC", "/img/framework/papermc.png"],
    ["Fabric", "/img/framework/fabric.png"]
  ]

  return (
    <main>
      <LoadingScreen hidden={!loading} logo={logo}></LoadingScreen>
      <div className={`flex min-h-screen flex-col justify-between p-12 ${loading ? 'hidden' : ''}`}>
        <div className="flex flex-row flex-wrap items-center justify-center gap-20">
          <div className="w-fit mx-auto my-52">
            <h1 className="text-7xl pb-1">Hey there! I&apos;m <i className={`${dancingscript.className} skibidi`}>Seth</i></h1>
            <Info text={"Professional Fullstack Developer with 4+ years of experience!"} speed={30}></Info>
          </div>
          <Terminal />
        </div>
        <div className="pt-44 text-center cursor-default">
          <div className="flex flex-row flex-wrap items-center justify-center m-0 p-0">
            <h1 className="text-5xl text-center">My loadout</h1>
          </div>
          <Marquee
          speed={150}
          pauseOnHover={true}
          className="mt-8"
          >
            {
              languages.map(lang => 
                <Language key={lang[0].toLowerCase()} name={lang[0]} img={lang[1]}></Language>
              )
            }
          </Marquee>
          <Marquee
          speed={150}
          pauseOnHover={true}
          direction="right"
          >
            {
              frameworks.map(framework => 
                <Language key={framework[0].toLowerCase()} name={framework[0]} img={framework[1]}></Language>
              )
            }
          </Marquee>
        </div>
        <div className="reviews pt-20 cursor-default">
          <h1 className="text-5xl text-center">Unsure? Here&apos;s a few vouches!</h1>
          <div className="reviews-container justify-center flex flex-row flex-wrap gap-12">
              <Review name="Nitlix" avatar="https://avatars.githubusercontent.com/u/66027553?v=4" description="i love python because he helped me calculate areas of circles" />
              <Review name="Mopi" avatar="https://avatars.githubusercontent.com/u/95306417?v=4" description="Talented developer and very very good friend :3" />
              <Review name="Refactoring" avatar="https://avatars.githubusercontent.com/u/143757135?v=4" description="One of my best developers. Major vouch" />
              <Review name="BigC" avatar="https://cdn.discordapp.com/avatars/1026351894580445208/b712a79cb334c7dcff500ee0c732977f" description="Seth is a great coder who has been helping me make a mod for minecraft with Python script. (and he is my pookie bear forever)" />
              <Review name="Spectra" avatar="https://cdn.discordapp.com/avatars/1179720806784323584/a_18124be850c272740385f8b0a8e49ee0.gif" description="Really good developer" />
              <Review name="Kars" avatar="https://cdn.discordapp.com/avatars/718424168068284516/a_ef7371f116afd2d15116e08561c43c28.gif" description="Very tallented developer, only 50% a femboy, would highly reccomend!" />
              <Review name="Korudo" avatar="https://ssmidge.com/assets/img/render/float/2.webp" description={"made me learn C so we can conversate about esp32s\n\n 10/10 would not learn again"} />
              <Review name="alarmingly good games" avatar="https://cdn.discordapp.com/avatars/350990291995590666/61f4ce8270ef0e43e04b10822e1f1376" description="Cool person, knows his shit" />
          </div>
        </div>
        
        {/*
        <div className="projects">
          <h1 className="text-4xl mt-20 text-center">Just a few projects I&apos;ve worked on</h1>
          <div className="flex flex-row flex-wrap justify-center mt-20 gap-20">
            <Project name="AccountSync" banner="/img/project/accountsync.png" url="https://accountsync.vercel.app" />
            <Project name="Aetherium" banner="/img/project/aetherium.png" url="https://aetherium.club" />
          </div>
        </div>
        */}

        <div className="socials">
          <h1 className="text-5xl text-center cursor-default">Want to get in touch?</h1>
          <div className="flex flex-row flex-wrap items-center justify-center mt-20 gap-10">
            <Social platform="Github" username="SethTheDev" url="https://github.com/SethTheDev"></Social>
            <Social platform="Discord" username="the_python" url="https://discord.com/users/866510980225040466"></Social>
          </div>
        </div>
        <div className="text-center mt-10">
          <h6 className="text-xs">Made with <Heart/>  by ThePython</h6>
          <h6 className="text-xs">© 2024 SethTheDev | All Rights Reserved</h6>
        </div>
        <div className="heart opacity-0 scale-50 fixed place-self-center">
          <Image alt="heart" src="/img/heart.svg" width={460} height={460}></Image>
        </div>
      </div>
    </main>
  );
}
