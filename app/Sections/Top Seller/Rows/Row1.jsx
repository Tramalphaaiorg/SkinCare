import IntroCard from "../components/IntroCard";
import { ItemsRow } from "../components/ItemsRow";

export default function Row1() {
    return (
        <section className="flex md:flex-row flex-col gap-6 px-8 my-6 items-center">
            <IntroCard />
            <ItemsRow />
        </section>
    )
}