import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const texts = ['Developer', 'Designer', 'Engineer', 'Hacker']

export function Developer() {
    const [currentIndex, setCurrentIndex] = useState(0)
    
    useEffect(() => {
        if (currentIndex >= texts.length) setCurrentIndex(0); // Stop if we reach the end
    
        const timer = setTimeout(() => {
          setCurrentIndex((prevIndex) => prevIndex + 1); // Move to the next item
        }, 1000); // 1-second delay
    
        return () => clearTimeout(timer); // Cleanup to prevent memory leaks
      }, [currentIndex, texts.length]);

    return (
        <motion.i 
            className="not-italic text-primary"
            key={currentIndex}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {texts[currentIndex]}
        </motion.i>
    )
}