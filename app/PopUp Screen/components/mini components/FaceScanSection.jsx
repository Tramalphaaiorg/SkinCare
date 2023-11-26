import { Capture } from "./Capture"

export const FaceScanSection = () => {
    return (
        <section className="flex-1 w-full relative bg-black/5 overflow-hidden">
            <div className="absolute w-full top-2 z-40 grid grid-cols-3 gap-2 items-center text-center">
                <div className="bg-white grid p-2 font-semibold">
                    <span className="text-themeColorDark">Centered:</span>
                    <span className="text-themeGreen">pass</span>
                </div>
                <div className="bg-white grid p-2 font-semibold">
                    <span className="text-themeColorDark">Clear:</span>
                    <span className="text-themeGreen">pass</span>
                </div>
                <div className="bg-white grid p-2 font-semibold">
                    <span className="text-themeColorDark">No Objects:</span>
                    <span className="text-themeGreen">pass</span>
                </div>
            </div>
            <div className="mix-blend-screen absolute top-0 left-0 h-full w-full grid place-items-center bg-white/70 z-20">
                <div className="sm:h-[25rem] h-[25rem] sm:w-[25rem] w-[17rem] mt-10 rounded-full border-[3px] border-white bg-black">

                </div>
            </div>
            <Capture />
        </section>
    )
}