import { FaStar } from "react-icons/fa6";

export default function InfoCard() {
    return (
        <div className="sm:w-[23rem] min-w-[20rem] w-[20rem] lg:ml-40 md:ml-10 bg-themeColor rounded-2xl h-[28rem] p-9 flex flex-col text-white flex-grow-0 flex-shrink-0">
            <span className="sm:text-3xl text-2xl font-bold">Reviews from our satisfied customers.</span>
            <span className="sm:text-3xl text-2xl font-bold max-w-[15rem]">Check them out to get their thoughts</span>
            <div className="flex justify-between my-5">
                <div className="w-[10rem] h-[3px] bg-white/60"></div>
                <div className="w-[4rem] h-[3px] bg-white/60"></div>
            </div>
            <section className="flex items-center justify-between my-20">
                <div className="flex gap-1 text-xl text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className="h-3 w-[2px] bg-white"></div>
                <span>Reviews / ratings</span>
            </section>
        </div>
    )
}