"use client"
import Marquee from "react-fast-marquee";
import CompanyElement from "./components/Company";
import { useEffect, useState } from "react";

const imagesArray = Array.from({ length: 15 }, (_, index) => `image${index + 1}.png`);

export default function TrustedCompanies() {
    const [mode, setMode] = useState([["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)"]]);
    useEffect(() => {
        function handleModeChange(e) {
            if (e.matches) {
                setMode(["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)"])
            } else {
                setMode(["rgba(230, 219, 255, .5)", "rgba(255, 255, 255, 0)"]);
            }
        }

        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

        // Initial check
        handleModeChange(darkModeQuery);

        // Add an event listener for changes in mode
        darkModeQuery.addEventListener('change', handleModeChange);
    }, []);
    return (
        <section className="flex flex-col py-4">
            <span className="mx-auto font-semibold text-xl p-10">Trusted by ecommerce companies</span>
            <div>
                <Marquee
                    pauseOnHover={true}
                    gradient={true}
                    gradientColor={mode}
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