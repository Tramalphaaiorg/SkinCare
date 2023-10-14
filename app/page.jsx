import Banner from "./Sections/ImageBanner/Banner";
import InfoSection from "./Sections/Info Section/InfoSection";
import ReviewsSections from "./Sections/Reviews/ReviewsSections";
import TopSection from "./Sections/Top Section/TopSection";
import TrustedCompanies from "./Sections/TrustedCompanies/TrustedCompanies";

export default function page() {
    return (
        <main className="w-screen h-screen dark:text-white font-medium">
            <TopSection />
            <Banner />
            <InfoSection />
            <TrustedCompanies />
            <ReviewsSections />
        </main>
    );
}                           