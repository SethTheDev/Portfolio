import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const greetings = ['Hello', 'Bonjour', 'Hallo', 'Zeeble Glorp 👽', 'Olà', 'Ciao', 'привет']

const variants = {
    initial: {
        top: 0,
    },
    exit: {
        top: '-100vh',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
}

export function Preloader() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index >= greetings.length - 1) return

        setTimeout(() => {
            setIndex(index + 1)
        }, index == 0 ? 1000 : 150)
    }, [index])

    return (
        <motion.div
        className='flex items-center justify-center h-screen w-screen bg-item'
        initial='initial'
        exit='exit'
        variants={variants}
        >
            <h1 className='text-3xl'>• {greetings[index]}</h1>
        </motion.div>
    )
}