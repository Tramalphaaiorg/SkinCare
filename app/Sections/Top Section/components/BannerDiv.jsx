export default function BannerDiv() {
    return (
        <section className="w-full justify-center items-center dark:bg-white/5 bg-opacity-20 bg-black/5 backdrop-blur-md mb-12">
            <div className="py-10 sm:px-32 px-16 bg-themeColor text-white flex flex-col items-center w-fit mx-auto gap-5">
                <h1 className="md:text-[3rem] md:leading-[3rem] text-2xl max-w-xl text-center">Are you a skin care seller? Create a store with us.</h1>
                <div className="flex gap-3">
                    <div className="sm:px-10 px-6 py-4 sm:text-lg text-sm cursor-pointer active:scale-90 hover:scale-105 rounded-full text-themeColor bg-white">Create store</div>
                    <div className="sm:px-10 px-6 py-4 sm:text-lg text-sm cursor-pointer active:scale-90 hover:scale-105 rounded-full hover:text-themeColor hover:bg-white border-2 border-white/60">Learn more</div>
                </div>
            </div>
        </section>
    );
}