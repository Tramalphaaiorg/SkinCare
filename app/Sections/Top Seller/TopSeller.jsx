import Row1 from "./Rows/Row1";

export default function TopSeller() {
    return (
        <section className="my-16 grid gap-6"> 
            <span className="text-center text-2xl">Top from seller's store</span>
            <Row1 />
            <Row1 />
        </section>
    )
}