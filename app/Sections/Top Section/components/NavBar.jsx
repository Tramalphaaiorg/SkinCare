"use client";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {
    const navRef = useRef();
    const [isScrolled, setIsScrolled] = useState(null);

    const intersectionCallback = (entries) => {
        const entry = entries[0];
        setIsScrolled(entry.isIntersecting);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(intersectionCallback, {
            threshold: 0.5,
        });

        if (navRef.current) {
            observer.observe(navRef.current);
        }

        return () => {
            if (navRef.current) {
                observer.unobserve(navRef.current);
            }
        };
    }, [navRef]);

    return (
        <nav aria-label="mainNav" ref={navRef} className="sticky top-0 left-0 z-[99999] grid md:grid-cols-[10rem_auto_8rem] grid-cols-2 w-full md:px-24 px-6 py-4 border-b dark:border-white/5 border-black/5">
            <div title="Logo" className="sm:text-2xl flex items-center dark:text-white/90 text-themeColor font-semibold">Alpha AI</div>
            <div className="hidden md:flex items-center justify-center gap-6">
                <span className="px-3 py-1 dark:hover:bg-white/10 hover:bg-themeColor/5 hover:scale-110 rounded-md active:scale-90 cursor-pointer">Home</span>
                <span className="px-3 py-1 dark:hover:bg-white/10 hover:bg-themeColor/5 hover:scale-110 rounded-md active:scale-90 cursor-pointer">How it works</span>
                <span className="px-3 py-1 dark:hover:bg-white/10 hover:bg-themeColor/5 hover:scale-110 rounded-md active:scale-90 cursor-pointer">Blog</span>
                <span className="px-3 py-1 dark:hover:bg-white/10 hover:bg-themeColor/5 hover:scale-110 rounded-md active:scale-90 cursor-pointer">About Us</span>
            </div>
            <div title="Contact" className="hidden sm:grid place-items-center py-3 rounded-md cursor-pointer active:scale-90 text-white bg-themeColor">Contact us</div>
        </nav>
    );
}