import Image from "next/image";
import { FaPlay } from "react-icons/fa6";

export default function ImageSection() {
    return (
        <div className="min-w-[20rem] flex-1 relative">
            <div className="h-[25rem] w-[calc(100%-2rem)] max-w-screen mx-auto overflow-hidden rounded-xl relative z-10 my-[1rem] grid place-items-center">
                <Image
                    src={"https://ablexerb.sirv.com/Images/aiony-haust-3TLl_97HNJo-unsplash.jpg"}
                    alt="Model"
                    height={1000}
                    width={1000}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <div className="absolute h-full w-full grid place-items-center bg-black/30 hover:bg-black/60">
                    <div className="p-5 rounded-full border-2 border-white cursor-pointer hover:scale-105 hover:bg-white/10 active:bg-white/20 active:scale-90 active:rotate-12">
                        <FaPlay className="text-2xl" />
                    </div>
                </div>
            </div>
            <div className="h-28 w-28 rounded-lg bg-themeColor/50 absolute top-0 left-0"></div>
            <div className="h-44 w-44 rounded-lg bg-themeYellow/50 absolute bottom-0 right-0"></div>
        </div>
    )
}