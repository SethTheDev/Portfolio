"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import "material-symbols"

const songs = [
    // Song - Artist - Album Cover - Color
    ['あの夢をなぞって', 'YOASOBI', 'https://i.scdn.co/image/ab67616d00001e02684d81c9356531f2a456b1c1', '#F87C7E'],
    ['Miku', 'Anamanaguchi ft. Hatsune Miku', 'https://i.scdn.co/image/ab67616d00001e02154c3562dc92bcd302c72c9c', '#54C5F7'],
    ['アイドル', 'YOASOBI', 'https://i.scdn.co/image/ab67616d00001e02b7d6ca50bf766ad72226290c', '#B4316F'],
    ['Godzilla', 'Eminem ft. Juice WRLD', 'https://i.scdn.co/image/ab67616d00001e022f44aec83b20e40f3baef73c', '#A60D23'],
    ['夜に駆ける', 'YOASOBI', 'https://i.scdn.co/image/ab67616d00001e02c5716278abba6a103ad13aa7', '#F25872'],
    ['Aria Math', 'C418', 'https://i.scdn.co/image/ab67616d00001e024cf0b29eb06a92aa96acae64', '#170902']
]

export function Music() {
    const [song, setSong] = useState(songs[0])
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const songInterval = setInterval(() => {
            setSong((prevSong) => {
                const currentIndex = songs.indexOf(prevSong);
                const nextIndex = (currentIndex + 1) % songs.length;
                return songs[nextIndex];
            });
        }, 1500);

        return () => clearInterval(songInterval);
    }, [songs])

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((prevProgress) => {
                return prevProgress >= 170 ? 0 : prevProgress + 1;
            });
        }, 200);

        return () => clearInterval(progressInterval);
    }, [])

    return (
        <motion.div
        className="music rounded-2xl flex flex-col items-center"
        whileHover={{
            scale: 1.1
        }}
        animate={{
            backgroundColor: song[3]
        }}
        >
            <Image
            src={song[2]}
            width={172}
            height={172}
            alt={song[0]}
            priority
            className="rounded-3xl mt-5"
            />

            <div className="w-2/3 h-2 bg-gray-400 rounded mt-2">
                <motion.div
                className="h-2 bg-white rounded"
                initial={{ width: 0 }}
                animate={{ width: progress }}
                >

                </motion.div>
            </div>
            <h1 className="text-lg text-center bg-gray-800 px-2 rounded-xl mt-1 cursor-pointer"><span className="material-symbols-rounded">fast_rewind</span> | <span className="material-symbols-rounded">pause</span> | <span className="material-symbols-rounded">fast_forward</span></h1>

            <div className="cursor-default">
                <h1 className="text-2xl text-center">{song[0]}</h1>
                <h1 className="text-sm text-center">{song[1]}</h1>
            </div>
        </motion.div>
    )
}