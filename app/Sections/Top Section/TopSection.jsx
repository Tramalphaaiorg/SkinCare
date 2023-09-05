import BannerDiv from "./components/BannerDiv";
import GradientDivs from "./components/GradientDivs";
import ImageDiv from "./components/ImageDiv";
import NavBar from "./components/NavBar";
import Rings from "./components/Rings";
import TextSection from "./components/TextSection";

export default function TopSection() {
    return (
        <section className="relative h-fit w-screen overflow-hidden">
            <Rings />
            <section className="bg-white/5 relative z-20 h-full backdrop-blur-lg w-full">
                <NavBar />
                <div className="md:px-24 sm:px-16 px-6 grid md:grid-cols-2 mb-12">
                    <TextSection />
                    <ImageDiv />
                </div>
                <BannerDiv />
            </section>
            <GradientDivs />
        </section>
    );
}