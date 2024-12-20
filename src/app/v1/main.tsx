"use client"

import { Info } from "./components/info";
import { Language } from "./components/language";
import { Terminal } from "./components/terminal";
import { Review } from "./components/review";
import { Heart } from "./components/heart";
import { Social } from "./components/social"
import Image from "next/image"
import Marquee from "react-fast-marquee"
import { Music } from "./components/music";
import React from "react";
import { Dancing_Script } from "next/font/google";
import { Coffee } from "./components/coffee";

const dancingscript = Dancing_Script({ weight: "700", subsets: ["latin"], preload: true })

export default function Main() {
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
        <div className={`flex min-h-screen flex-col justify-between`}>
          <div className="flex flex-row flex-wrap items-center justify-center gap-20 min-h-screen">
            <div>
              <h1 className="text-7xl pb-1">Hey there! I&apos;m <i className={`${dancingscript.className} skibidi`}>Seth</i></h1>
              <Info text={"Professional Fullstack Developer with 4+ years of experience!"} speed={30}></Info>
            </div>
            <div className="flex flex-col items-center">
              <Music />
              <Terminal />
            </div>
          </div>
          <div className="pt-44 text-center cursor-default">
            <div className="flex flex-row flex-wrap items-center justify-center m-0 p-0">
              <h1 className="text-5xl text-center">My loadout</h1>
            </div>
            <Marquee
            speed={150}
            className="mt-8"
            autoFill={true}
            >
              {
                languages.map(lang => 
                  <Language key={lang[0].toLowerCase()} name={lang[0]} img={lang[1]}></Language>
                )
              }
            </Marquee>
            <Marquee
            speed={150}
            autoFill={true}
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
                <Review name="Nitlix" avatar="https://avatars.githubusercontent.com/u/66027553?v=4" description="i love python because he helped me calculate areas of circles"
                socials={[["Github", "https://github.com/Nitlix"], ["Web", "https://nitlix.pro"]]}
                />
                <Review name="Mopi" avatar="https://avatars.githubusercontent.com/u/95306417?v=4" description="Talented developer and very very good friend :3" 
                />
                <Review name="Refactoring" avatar="https://avatars.githubusercontent.com/u/143757135?v=4" description="One of my best developers. Major vouch" 
                socials={[["Github", "https://github.com/refactorinqq"]]}
                />
                {/*
                <Review name="BigC" avatar="https://cdn.discordapp.com/avatars/1026351894580445208/b712a79cb334c7dcff500ee0c732977f" description="Seth is a great coder who has been helping me make a mod for minecraft with Python script. (and he is my pookie bear forever)" />
                */}
                <Review name="Spectra" avatar="https://cdn.discordapp.com/avatars/1179720806784323584/a_18124be850c272740385f8b0a8e49ee0.gif" description="Really good developer" />
                <Review name="Kars" avatar="https://cdn.discordapp.com/avatars/718424168068284516/a_ef7371f116afd2d15116e08561c43c28.gif" description="Very tallented developer, would highly reccomend!" 
                socials={[["Github", "https://github.com/Kars1996"]]}
                />
                <Review name="Korudo" avatar="https://ssmidge.com/assets/img/render/float/2.webp" description={"made me learn C so we can conversate about esp32s\n\n 10/10 would not learn again"} 
                socials={[["Github", "https://github.com/Ssmidge"], ["Web", "https://ssmidge.xyz/"]]}
                />
                <Review name="alarmingly good games" avatar="https://cdn.discordapp.com/avatars/350990291995590666/61f4ce8270ef0e43e04b10822e1f1376" description="Cool person, knows his shit" />
                <Review name="zsld" avatar="https://i.imgur.com/oiAitum.jpeg" description="i worked with python on minecraft clients, hes a insanely good developer. very cool guy" 
                socials={[["Instagram", "https://instagram.com/zslddd/"], ["Github", "https://github.com/zslddd"]]}
                />
                <Review name="Nyami" avatar="https://cdn.discordapp.com/avatars/865731297154170911/cb926f89b9a25931f7aa613f0d1530d9.webp?size=4096" description="I love python because he is a programming language :3"
                socials={[["Github", "https://github.com/CuteNyami"]]}
                />
                <Review name="Foreverably" avatar="https://cdn.discordapp.com/avatars/302868099743612939/e8aab4ddcdb26e804e1d8f8b1f24ec86.png?size=4096" description="cool dev"
                socials={[["Web", "https://foreverably.ysit.ee"]]}
                />
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
  
          <div className="socials flex flex-col items-center gap-10">
            <h1 className="text-5xl text-center cursor-default">Want to get in touch?</h1>
            <div className="flex flex-row flex-wrap items-center justify-center gap-10">
              <Social platform="Github" username="SethTheDev" url="https://github.com/SethTheDev"></Social>
              <Social platform="Discord" username="the_python" url="https://discord.com/users/866510980225040466"></Social>
            </div> 
            <div className="flex flex-row items-center gap-10">
              <h1 className="text-xl cursor-default">Hazelnut Latte ☕</h1>
              <Coffee></Coffee>
            </div>
          </div>
          <div className="text-center my-10">
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
  