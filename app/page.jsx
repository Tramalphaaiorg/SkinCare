import Banner from "./Sections/ImageBanner/Banner";
import InfoSection from "./Sections/Info Section/InfoSection";
import TopSection from "./Sections/Top Section/TopSection";

export default function page() {
    return (
        <main className="w-screen h-screen dark:text-white font-medium">
            <TopSection />
            <Banner />
            <InfoSection />
        </main>
    );
}                           