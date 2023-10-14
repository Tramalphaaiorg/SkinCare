import Link from "next/link";

export default function TextSection() {
    return (
        <div className="min-w-[20rem] flex-1 md:p-10 p-4 flex flex-col gap-4 sm:text-lg">
            <h1 className="sm:text-3xl text-xl font-semibold">
                Alpha AI Device scan
            </h1>
            <p className="opacity-70 max-w-[95%]">
                Here Alpha Ai uses cameras to scan faces and add make predictions of skin diseases and provides recommendations to solve the issues.
            </p>
            <Link href={"#"} className="opacity-70 underline underline-offset-4 hover:text-themeColor active:opacity-25 active:scale-95">Learn more</Link>
        </div>
    )
}