import Image from "next/image"

interface ReviewParams {
    name: string,
    img: string,
    message: string,
    reverse: boolean
}

export function Review({ name, img, message, reverse }: ReviewParams) {
    return (
        <div className="mx-4 my-4 flex flex-row justify-between">
            {
                reverse ? (
                    <Text name={name} img={img} message={message} reverse={reverse} />
                ) : (
                    <Avatar name={name} img={img} message={message} reverse={reverse} />
                )
            }
            {
                reverse ? (
                    <Avatar name={name} img={img} message={message} reverse={reverse} />
                ) : (
                    <Text name={name} img={img} message={message} reverse={reverse} />
                )
            }
        </div>
    )
}

function Text({ name, img, message, reverse }: ReviewParams) {
    return (
        <div className="flex flex-col items-center justify-center w-[50%]">
            <h1 className="font-[omori] text-center text-2xl text-black">{message}</h1>
            <br />
            <h1 className="font-[omori] text-3xl text-black">- {name}</h1>
        </div>
    )   
}

function Avatar({ name, img, message, reverse }: ReviewParams) {
    return (
        <div className="">
            <div className="relative">
                <img src={img} width={200} height={200} />
                <img src="/img/omori/portrait.png" className="absolute inset-0 w-full h-full pointer-events-none" />
            </div>
        </div>
    )
}