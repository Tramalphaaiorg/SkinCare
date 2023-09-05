import Link from "next/link";

export default function TextSection() {
    return (
        <div className="min-w-[20rem] flex-1 p-4 flex flex-col gap-4">
            <h2 className="sm:text-3xl text-xl font-semibold">
                Alpha AI Device scan
            </h2>
            <p className="opacity-70 sm:text-xl">
                Here Alpha Ai uses cameras to scan faces and add make predictions of skin diseases and provides recommendations to solve the issues.
            </p>
            <Link href={"#"} className="opacity-70 underline underline-offset-4 sm:text-xl">Learn more</Link>
        </div>
    )
}