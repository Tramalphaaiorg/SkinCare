import Image from "next/image";

export default function ProductCard() {
    return (
        <section>
            <div className="w-[20rem] h-[25rem] flex flex-col relative">
                <span className="absolute -right-5 -top-16 text-[15rem] font-black opacity-5 pointer-events-none text-themeColor">
                    02
                </span>
                <div className="flex-1 flex flex-col p-7 bg-white text-themeColorSemiDark items-center rounded-2xl">
                    <Image
                        src={"https://ablexerb.sirv.com/Images/fdbe3e79-f356-434a-88ff-7f9e59c94cb3.png"}
                        alt=""
                        height={1000}
                        width={1000}
                        className="h-[15rem] object-contain my-6 relative z-10"
                    />
                    <span>Dove whitening</span>
                </div>
                <span className="whitespace-nowrap rounded-xl font-bold text-sm px-5 py-3 w-fit mx-auto bg-themeColorDark cursor-pointer -mt-5">
                    Start your skin analysis journey
                </span>
            </div>
        </section>
    )
}