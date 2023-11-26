import { FaceScanSection } from "./mini components/FaceScanSection";
import { HeadSection } from "./mini components/HeadSection";

export const Main = () => {
    return (
        <main className="bg-white relative z-10 shadow-[0_0_25px_rgb(255,255,255,0.25)] md:w-[50rem] sm:w-[30rem] sm:h-[50vmax] sm:max-h-[80vh] w-[calc(100%-2rem)] h-[40rem] flex flex-col border-2 border-white rounded-b-xl overflow-hidden">
            <HeadSection />
            <FaceScanSection />
        </main>
    )
}