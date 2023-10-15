import ImgSection from "./components/imgSection";
import TextSection from "./components/textSection";

export default function InfoSection02() {
    return (
        <section className="flex flex-wrap sm:flex-row flex-col-reverse sm:items-start items-center gap-5 w-full items-center sm:px-16 px-6 p-6 my-10">
            <TextSection />
            <ImgSection />
        </section>
    );
}