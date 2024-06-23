"use client"

import { Info } from "./components/info";
import { Language } from "./components/language";
import { Social } from "./components/social";
import { Terminal } from "./components/terminal";
import { Review } from "./components/review";
import { Project } from "./components/project";
import React, { useEffect, useState } from "react";
import { Dancing_Script } from "next/font/google";

const dancingscript = Dancing_Script({ weight: "700", subsets: ["latin"] })

export default function Home() {
  const languages = [
    ["Java", "/img/lang/java.png", "4 yrs"],
    ["Python", "/img/lang/python.png", "4.5 yrs"],
    ["Javascript", "/img/lang/javascript.png", "4 yrs"],
    ["Typescript", "/img/lang/typescript.png", "3 yrs"],
    ["HTML/CSS", "/img/lang/htmlcss.png", "3 yrs"],
  ]

  return (
    <main className="flex min-h-screen flex-col justify-between p-12">
      <div className="flex flex-row flex-wrap items-center justify-center gap-20">
        <div className="welcome">
          <h1 className="hello">Hey there! I&apos;m <i className={`${dancingscript.className} skibidi`}>Seth</i></h1>
          <Info text={"Professional Fullstack Developer with 4+ years of experience!"} speed={30}></Info>
        </div>
        <Terminal />
      </div>
      <div className="languages text-center">
        <div className="flex flex-row flex-wrap items-center justify-center m-0 p-0">
          <h1 className="languages-heading text-center">My loadout</h1>
        </div>
        <div className="conveyor-container">
          <div className="languages-box">
            {
            languages.map(lang => 
              <Language key={lang[0].toLowerCase()} name={lang[0]} img={lang[1]} yrs={lang[2]}></Language>
            )
            }
            {
            languages.map(lang => 
              <Language key={lang[0].toLowerCase()} name={lang[0]} img={lang[1]} yrs={lang[2]}></Language>
            )
            }
          </div>
        </div>
      </div>
      <div className="reviews pt-20">
        <h1 className="text-4xl text-center">Unsure? Here&apos;s a few vouches!</h1>
        <div className="reviews-container justify-center flex flex-row flex-wrap gap-10">
            <Review name="Nitlix" avatar="https://avatars.githubusercontent.com/u/66027553?v=4" description="i love python because he helped me calculate areas of circles" />
            <Review name="Mopi" avatar="https://avatars.githubusercontent.com/u/95306417?v=4" description="Talented developer and very very good friend :3" />
            <Review name="Refactoring" avatar="https://avatars.githubusercontent.com/u/143757135?v=4" description="I like balls but I like python better" />
            <Review name="BigC" avatar="https://cdn.discordapp.com/avatars/1026351894580445208/b712a79cb334c7dcff500ee0c732977f" description="Seth is a great coder who has been helping me make a mod for minecraft with Python script. (and he is my pookie bear forever)" />
            <Review name="Spectra" avatar="https://cdn.discordapp.com/avatars/1179720806784323584/a_18124be850c272740385f8b0a8e49ee0.gif" description="very smart and sexy" />
            <Review name="Kars" avatar="https://cdn.discordapp.com/avatars/718424168068284516/a_ef7371f116afd2d15116e08561c43c28.gif" description="Very tallented developer, only 50% a femboy, would highly reccomend!" />
            <Review name="Korudo" avatar="https://cdn.discordapp.com/avatars/682984308776239134/804b14bbaac0364e896f3f2f20036914.png" description={"made me learn C so we can conversate about esp32s\n\n 10/10 would not learn again"} />
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
        <h1 className="text-4xl">Interested? Find me on one of these platforms</h1>
        <Social name="discord" url="https://discord.com/users/866510980225040466" username="the_python" />
        <Social name="github" url="https://github.com/SethTheDev" username="SethTheDev" />
      </div>
      <div className="text-center mt-10">
        <h6 className="text-xs">Made with <strong className="text-sky-400">&#9829;</strong> by ThePython</h6>
        <h6 className="text-xs">© 2024 SethTheDev | All Rights Reserved</h6>
      </div>
    </main>
  );
}
