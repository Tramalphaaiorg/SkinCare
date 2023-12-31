import IntroCard from "../components/IntroCard";
import { ItemsRow } from "../components/ItemsRow";

export default function Row1() {
    return (
        <section className="flex flex-wrap gap-4 px-8">
            <IntroCard />
            <ItemsRow />
        </section>
    )
}