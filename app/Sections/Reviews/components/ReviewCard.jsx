import Image from "next/image";
import { FaStar } from "react-icons/fa6";

export default function ReviewCard({val}) {
    return (
        <div className="sm:w-[23rem] max-w-[20rem] w-[20rem] md:ml-40 bg-white rounded-2xl h-[28rem] p-9 flex flex-col text-black relative overflow-hidden">
            <span className="absolute -right-5 -top-16 text-[15rem] font-black opacity-5">
                02
            </span>
            <section className="flex items-center gap-3 py-5 border-b pt-0">
                <div className="w-[4rem] h-[4rem] rounded-full overflow-hidden">
                    <Image 
                        src={"https://ablexerb.sirv.com/Images/sponsors/SVG/Asset%204.svg"}
                        alt="Asset"
                        height={300}
                        width={300}
                        className="w-full"
                    />
                </div>
                <span className=" font-semibold">Vikki Starr</span>
            </section>

            <section className="flex flex-col gap-2 flex-1 py-3">
                <div className="flex gap-1 text-lg text-yellow-500 py-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className="text-gray-200" />
                </div>
                <section className="flex flex-col gap-2 flex-1">
                    <div className="font-semibold text-lg flex-1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis est, quo delectus vitae hic mollitia beatae maxime veniam. Ducimus, architecto?
                    </div>

                    <span className="opacity-50">
                        December 2023
                    </span>
                </section>
            </section>
        </div>
    );
}