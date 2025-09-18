import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Popup from "reactjs-popup";
import { PopupActions } from "reactjs-popup/dist/types";

export function Message() {
    const ref = useRef<PopupActions>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    const onClick = async () => {
        if (ref.current && nameRef.current && messageRef.current) {
            await fetch(
                '/api/message',
                {
                    method: 'post',
                    body: JSON.stringify({
                        name: nameRef.current.value,
                        message: messageRef.current.value
                    })
                }
            )
            ref.current.close()
        }
    }

    return (
        <Popup
            trigger={<motion.button whileHover={{ scale: 1.2 }}>Send A Review</motion.button>}
            modal
            nested
            overlayStyle={{background: 'rgba(0,0,0,0.5)'}}
            ref={ref}
        >
            <div className="flex flex-col justify-center bg-gray-700 w-96 h-72 rounded-3xl">
                <h1 className="text-xl mt-5 text-center">Message</h1>
                <div className="flex flex-col mt-5 ml-5"> 
                    <h1 className="">Name</h1>
                    <input ref={nameRef} type="text" className="bg-gray-500 text-gray-300 w-52"></input>
                </div>
                <div className="flex flex-col mt-5 ml-5"> 
                    <h1 className="">Message</h1>
                    <textarea ref={messageRef} className="bg-gray-500 text-gray-300 w-52"></textarea>
                </div>
                <motion.button className="w-32 mt-5 ml-5" whileHover={{ scale: 1.1 }} onClick={onClick}>Send!</motion.button>
            </div>
        </Popup>
    )
}