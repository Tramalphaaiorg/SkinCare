import { FaArrowRight } from "react-icons/fa6";

export default function TextSection() {
    return (
        <section className="flex flex-col py-4 px-6 gap-5 text-themeColorDark dark:text-white">
            <span className="flex items-center gap-3">
                <div className="w-16 h-[2px] dark:bg-white bg-themeColorDark"></div>
                Disease 1
            </span>

            <span className="text-5xl font-semibold">Acne</span>

            <span className="max-w-md text-lg grid gap-3 opacity-60">
                <p>A common skin condition that occurs when hair follicles become clogged with oil and dead skin cell.</p>
                <p>
                    This can lead to the formation of pimples, blackhead, whiteheads, and other types of blemish on the skin, popularly on the skin, particularly on the face, chest back.
                </p>
            </span>

            <div className="text-themeColor flex items-center border border-themeColor rounded-[2rem] w-[15rem]  cursor-pointer group">
                <span className="px-8 py-4 flex-1 text-center">view more</span>
                <div className="p-4 border rounded-full border-themeColor h-full aspect-square group-hover:-mr-2 bg-white/50 dark:bg-black/50 group-active:mr-1 group-active:rotate-45 grid place-items-center backdrop-blur">
                    <FaArrowRight />
                </div>
            </div>
            
        </section>
    )
}
