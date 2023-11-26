import { FaPaperPlane, FaRegPaperPlane } from "react-icons/fa6";

export default function Top() {
    return (
        <section className="p-9 bg-themeColor sm:w-fit w-full relative -bottom-[7rem] rounded-2xl text-white">
            <div className="md:text-[2.75rem] text-xl uppercase md:leading-[2.75rem] font-bold md:max-w-lg max-w-sm whitespace-normal">Subscribe to get our news letter and stay on the know</div>
            <div className="mt-6 flex sm:gap-4 gap-2">
                <input 
                    type="email" 
                    placeholder="Your Email"
                    className="sm:p-4 p-3 sm:px-6 px-3 rounded-[1rem] bg-transparent border-white border outline-none md:w-[30rem] w-[13rem] flex-1" 
                />
                <div className="sm:p-4 p-3 sm:px-6 px-3 rounded-[1rem] bg-white text-themeColor cursor-pointer hover:scale-[1.005] active:scale-90 grid place-items-center">
                    <span className="sm:block hidden">subscribe</span>
                    <span className="sm:hidden">
                        <FaPaperPlane />
                    </span>
                </div>
            </div>
        </section>
    );
}