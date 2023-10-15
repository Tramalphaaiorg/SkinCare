import ImgSection from "./components/imgSection";
import TextSection from "./components/textSection";

export default function InfoSection03() {
    return (
        <section className="flex flex-wrap sm:flex-row flex-col sm:items-start items-center w-full items-center sm:px-16 px-6 p-6 my-10 gap-5">
            <ImgSection />
            <TextSection />
        </section>
    );
}