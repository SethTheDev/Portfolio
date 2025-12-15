import Image from "next/image"

interface AvatarParams {
    name: string,
    img: string,
    red: string,
    blue: string
}

export function Avatar({ name, img, red, blue }: AvatarParams) {


    return (
        <div className="flex flex-col items-center">
            <div className="border-white border-4 w-[90%] px-2 bg-black">
                <h1 className="font-[omori] text-center font-bold text-5xl">{name.toUpperCase()}</h1>
            </div>
            <div className="flex flex-col border-2 border-white bg-[#cfcfcf]">
                <div className="border-4 border-black mx-2 mt-2">
                    <Image alt="avatar" src={img} width={200} height={200} />
                </div>
                <div className="border-[1px] border-black px-2 py-2">
                    <div className="bg-[#fe3227] flex flex-col justify-center h-7 rounded-lg border-2 border-black">
                        <h1 className="font-[omori] ml-2 text-2xl font-bold mr-2 text-right">{red}</h1>
                    </div>
                </div>
                <div className="border-[1px] border-black px-2 py-2">
                    <div className="bg-[#00afa8] flex flex-col justify-center h-7 rounded-lg border-2 border-black">
                        <h1 className="font-[omori] ml-2 text-2xl font-bold mr-2 text-right">{blue}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}