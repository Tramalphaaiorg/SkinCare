import { FaX } from "react-icons/fa6";

export const HeadSection = () => {
    return (
        <div className="w-full p-4 grid place-items-center grid-cols-[32px_auto_32px] shadow-[10px_0_10px] shadow-black/10 handle">
            <span></span>
            <span className="uppercase font-bold text-themeColor">Alpha AI</span>
            <span className="w-full grid place-items-center aspect-square rounded hover:bg-black/10 h-fit text-xs font-semibold text-black hover:text-red-600 border border-black/5 cursor-pointer active:scale-90 group">
                <FaX className="group-active:rotate-180 delay-0 font-bold" />
            </span>
        </div>
    );
}