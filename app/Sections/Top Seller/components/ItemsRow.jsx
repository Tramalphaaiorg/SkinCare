"use client"
import React, { useEffect, useRef, useState } from 'react';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { useMediaQuery } from 'react-responsive';
import { Splide, SplideSlide} from '@splidejs/react-splide';
import ProductCard from './ProductCard';


export const ItemsRow = () => {
    const [options, setOptions] = useState({
        type: 'loop',
        focus: 3,
        gap: '1rem',
        interval: 3000,
        perPage: 1.5,
        omitEnd: false,
        rewind: true,
        autoplay: true,
        pauseOnHover: true,
        resetProgress: false,
        height: 'fit-content',
    });

    const isBigScreen = useMediaQuery({ query: '(min-width: 1020px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 950px)' });


    useEffect(() => {
        if (isTabletOrMobile) {
            setOptions(() => ({ perPage: 1, focus: "center", gap: "3rem" }));
            return;
        }
        if(isBigScreen){
            setOptions(()=>({perPage: 2.5, focus: 3, gap: ""}));
            return;
        }
    }, []);

    return (
        <Splide
            options={options}
            aria-labelledby="autoplay-example-heading"
            className='splide overflow-x-auto sm:flex-1 min-w-[20rem] w-[20rem] flex sm:justify-normal justify-center mx-auto'
            hasTrack={true}
        >
            <SplideSlide>
                <ProductCard ord={0} />
            </SplideSlide>
            <SplideSlide>
                <ProductCard ord={1} />
            </SplideSlide>
            <SplideSlide>
                <ProductCard ord={2} />
            </SplideSlide>
            <SplideSlide>
                <ProductCard ord={3} />
            </SplideSlide>
            <SplideSlide>
                <ProductCard ord={4} />
            </SplideSlide>
            <SplideSlide>
                <ProductCard  ord={5}/>
            </SplideSlide>
            <SplideSlide>
                <ProductCard ord={0} />
            </SplideSlide>
            <SplideSlide>
                <ProductCard ord={1} />
            </SplideSlide>
            <SplideSlide>
                <ProductCard ord={2} />
            </SplideSlide>
            <SplideSlide>
                <ProductCard ord={3} />
            </SplideSlide>
            <SplideSlide>
                <ProductCard ord={4} />
            </SplideSlide>
            <SplideSlide>
                <ProductCard  ord={5}/>
            </SplideSlide>
        </Splide>
    );
};