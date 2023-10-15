export default function TextSection() {
    return (
        <section className="flex-1 flex flex-col dark:text-white sm:text-left text-center text-themeColorDark sm:pl-6">
            <span className="text-3xl max-w-[30rem] font-semibold py-4">
                Visit our personalized skincare beauty clinique and store powered by Alpha AI.
            </span>
            <span className="max-w-[25rem] opacity-80">
                Visit our skin care disease diagnosis center and store for a flawless and disease free skin powered by Alpha AI
            </span>

            <div className="flex gap-3 items-center w-full sm:justify-normal justify-center py-8">
                <div className="py-4 px-6 rounded-xl bg-themeColor text-white cursor-pointer hover:scale-105 active:scale-90">
                    Get started
                </div>
                <div className="py-4 px-6 rounded-xl text-themeColor border border-themeColor cursor-pointer hover:bg-themeColor hover:text-white hover:scale-105 active:scale-90">
                    Watch video
                </div>
            </div>
        </section>
    );
}