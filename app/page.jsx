import Footer from "./Sections/Footer/Footer";
import Banner from "./Sections/ImageBanner/Banner";
import InfoSection from "./Sections/Info Section/InfoSection";
import ReviewsSections from "./Sections/Reviews/ReviewsSections";
import TopSection from "./Sections/Top Section/TopSection";
import TopSeller from "./Sections/Top Seller/TopSeller";
import TrustedCompanies from "./Sections/TrustedCompanies/TrustedCompanies";
import InfoSection03 from "./Sections/info section 02 copy/infoSection03";
import InfoSection02 from "./Sections/info section 02/infoSection02";
import Carousel from "./Sections/possible_skin_disease/Carousel";

export default function page() {
    return (
        <main className="w-screen h-screen dark:text-white font-medium">
            <TopSection />
            {/* <Banner /> */}
            <InfoSection />
            <TrustedCompanies />
            <ReviewsSections />
            <InfoSection02 />
            <InfoSection03 />
            <TopSeller />
            <Carousel />
            <Footer />
        </main>
    );
}                           