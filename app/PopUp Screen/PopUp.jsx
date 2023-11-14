"use client";
import { BackgroundBack } from "./components/BackgroundBack";
import { Main } from "./components/Main";

export const PopUp = () => {
    return (
        <section className="fixed top-0 left-0 h-screen w-screen z-[999] grid place-items-center">
            <BackgroundBack />
            <Main />
        </section>
    );
}