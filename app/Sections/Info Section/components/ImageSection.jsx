import Image from "next/image";

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
            </div>
            <div className="h-28 w-28 rounded-lg bg-themeColor/50 absolute top-0 left-0"></div>
            <div className="h-44 w-44 rounded-lg bg-themeYellow/50 absolute bottom-0 right-0"></div>
        </div>
    )
}