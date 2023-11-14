import { Capture } from "./Capture"

export const FaceScanSection = () => {
    return (
        <section className="flex-1 w-full relative bg-black/5 overflow-hidden">
            <div className="mix-blend-screen absolute top-0 left-0 h-full w-full grid place-items-center bg-white/40 z-20">
                <div className="h-[25rem] w-[25rem] mt-10 rounded-full border-[3px] border-white bg-black">

                </div>
            </div>
            <Capture />
        </section>
    )
}