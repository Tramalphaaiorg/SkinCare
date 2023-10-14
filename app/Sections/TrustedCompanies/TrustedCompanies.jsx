import Marquee from "react-fast-marquee";
import CompanyElement from "./components/Company";

const imagesArray = Array.from({ length: 15 }, (_, index) => `image${index + 1}.png`);

export default function TrustedCompanies() {
    return (
        <section className="flex flex-col py-4">
            <span className="mx-auto font-semibold text-xl p-10">Trusted by ecommerce companies</span>
            <div>
                <Marquee
                    pauseOnHover={true}
                    gradient={true}
                    gradientColor={["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)"]}
                    gradientWidth={500}
                    speed={20}
                >
                    {imagesArray.map((imgElement, index) => (
                        <CompanyElement key={index} imgElement={imgElement} />
                    ))}
                </Marquee>
            </div>
        </section>
    );
}