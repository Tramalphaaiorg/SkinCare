import { Reviews } from "./components/Reviews";
import InfoCard from "./components/infoCard";

export default function ReviewsSections() {
    return (
        <section className="py-24 flex flex-wrap gap-8 items-center justify-center overflow-x-hidden">
            <InfoCard />
            <Reviews />
        </section>
    );
}