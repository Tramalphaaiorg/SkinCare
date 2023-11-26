import Link from "next/link";

export default function Base() {
    return (
        <section className="bg-[rgb(28,25,25)] text-white sm:px-16 px-6 gap-10 grid p-8 pt-48 w-full">
            <section className="flex flex-wrap gap-[2rem_1rem] items-center w-full sm:text-lg">
                <div className="grid gap-3 min-w-fit flex-1">
                    <Link href={"#"} className="sm:text-4xl text-3xl font-bold text-themeColor">Alpha AI</Link>
                    <Link className="hover:text-themeColor active:text-themeColorDark" href={"mailt0:info@alphaai.com"}>info@alphaai.com</Link>
                    <Link className="hover:text-themeColor active:text-themeColorDark" href={"tel:234000090909"}>(+234) 000-090-0909</Link>
                    <Link className="hover:text-themeColor active:text-themeColorDark" href={"#"}>Rivers State, Port Harcourt</Link>
                </div>
                <div className="grid gap-3 min-w-fit flex-1">
                    <Link className="hover:text-themeColor active:text-themeColorDark" href={"mailt0:info@alphaai.com"}>info@alphaai.com</Link>
                    <Link className="hover:text-themeColor active:text-themeColorDark" href={"tel:234000090909"}>(+234) 000-090-0909</Link>
                    <Link className="hover:text-themeColor active:text-themeColorDark" href={"#"}>Rivers State, Port Harcourt</Link>
                </div>
                <div className="grid gap-3 min-w-fit flex-1">
                    <Link className="hover:text-themeColor active:text-themeColorDark" href={"mailt0:info@alphaai.com"}>info@alphaai.com</Link>
                    <Link className="hover:text-themeColor active:text-themeColorDark" href={"tel:234000090909"}>(+234) 000-090-0909</Link>
                    <Link className="hover:text-themeColor active:text-themeColorDark" href={"#"}>Rivers State, Port Harcourt</Link>
                </div>
                <div className="grid gap-3 min-w-fit flex-1">
                    <Link className="hover:text-themeColor active:text-themeColorDark" href={"mailt0:info@alphaai.com"}>info@alphaai.com</Link>
                    <Link className="hover:text-themeColor active:text-themeColorDark" href={"tel:234000090909"}>(+234) 000-090-0909</Link>
                    <Link className="hover:text-themeColor active:text-themeColorDark" href={"#"}>Rivers State, Port Harcourt</Link>
                </div>
            </section>

            <section className="flex flex-col items-center gap-3 text-sm opacity-70">
                <div className="flex">
                    <span className="px-3">Career</span>
                    <span className="px-3">Privacy Policy</span>
                    <span className="px-3">Terms & Condition</span>
                </div>
                <span>© {new Date().getFullYear()} Alpha AI</span>
            </section>
        </section>
    )
}