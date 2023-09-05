import ImageSection from "./components/ImageSection";
import TextSection from "./components/TextSection";

export default function InfoSection() {
    return (
        <section className="flex flex-wrap gap-6 p-4 items-center bg-white/5">
            <TextSection />
            <ImageSection />
        </section>
    );
}