import ImgSection from "./sections/ImgSection";
import TextSection from "./sections/TextSection";

export default function Card() {
    return (
        <section className="py-6 px-8 dark:bg-white/5 bg-themeColorSemiDark/5 flex md:items-stretch items-center md:flex-row flex-col min-w-fit justify-center gap-12 rounded-2xl w-screen">
            <TextSection />
            <ImgSection />
        </section>
    )
}