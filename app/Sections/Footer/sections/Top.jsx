export default function Top() {
    return (
        <section className="p-9 bg-themeColor w-fit relative -bottom-[7rem] rounded-2xl text-white">
            <div className="md:text-[2.75rem] text-2xl uppercase md:leading-[2.75rem] font-bold md:max-w-lg max-w-sm whitespace-normal">Subscribe to get our news letter and stay on the know</div>
            <div className="mt-6 flex gap-4">
                <input 
                    type="email" 
                    placeholder="Your Email"
                    className="p-4 px-6 rounded-[2rem] bg-transparent border-white border outline-none md:w-[30rem] w-[15rem]" 
                />
                <div className="p-4 px-6 rounded-[2rem] bg-white text-themeColor cursor-pointer hover:scale-[1.005] active:scale-90">
                    subscribe
                </div>
            </div>
        </section>
    )
}