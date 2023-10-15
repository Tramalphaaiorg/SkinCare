export default function IntroCard({ord}) {
    return (
        <section>
            <div className="ptn w-[20rem] h-[25rem] rounded-xl overflow-hidden bg-themeColorSemiDark text-white grid place-items-center relative">
                <span className="text-xl">
                    Skin Care {ord}
                </span>
                <span className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-3xl font-bold text-sm px-5 py-3 bg-white text-themeColorDark cursor-pointer">
                    Start your skin analysis journey
                </span>
            </div>
        </section>
    )
}