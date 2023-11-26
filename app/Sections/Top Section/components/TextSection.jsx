import Link from "next/link"
import { FaArrowRight, FaAndroid } from "react-icons/fa6"
export default function TextSection() {
    return (
        <div className="sm:pt-24 pt-16 pb-16 flex flex-col gap-6">
            <span className="sm:text-[9vmin] text-[12vmin] leading-[12vmin] sm:max-w-[calc(100%-1.5rem)] max-w-[17rem] sm:leading-[9vmin] font-bold">
                Unlock radiant skin with <span className="text-themeblue cursor-pointer">Alpha AI</span>. Your personalizes solution for skin health.
            </span>
            <span className="opacity-70 sm:max-w-[calc(100%-1rem)] sm:text-base text-sm">
                Experience cutting-edge AI technology that swiftly detects skin conditions and diseases to prescribe tailored product recommendations and skincare routines, empowering you to embrace a journey towards healthier glowing skin.
            </span>

            <div className="flex sm:flex-row flex-col gap-4 sm:items-stretch items-stretch sm:mt-16 mt-8">
                <div className="rounded-xl bg-themeColor text-white cursor-pointer active:scale-90 px-8 py-4 hover:scale-110 flex gap-3 items-center group">
                    Get recommended <FaArrowRight className="text-white group-hover:scale-125" />
                </div>
                <Link href="/skin-analysis" className="rounded-xl border-2 border-transparent hover:border-themeColor cursor-pointer active:scale-90 px-8 py-4 hover:scale-110 flex gap-3 items-center group">
                    Analyze skin <FaAndroid className="text-themeColor group-hover:scale-125" />
                </Link>
            </div>
        </div>
    );
}