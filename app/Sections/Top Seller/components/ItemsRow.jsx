"use client"
import React, { useEffect, useRef, useState } from 'react';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import { Splide, SplideSlide} from '@splidejs/react-splide';
import ProductCard from './ProductCard';


export const ItemsRow = () => {
    const [options, setOptions] = useState({
        type: 'loop',
        focus: 3,
        gap: '1rem',
        interval: 1000,
        perPage: 2.5,
        omitEnd: false,
        rewind: true,
        autoplay: true,
        pauseOnHover: true,
        resetProgress: false,
        height: 'fit-content',
    });
    const [isMobileView, setIsMobileView] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768;
            setIsMobileView(isMobile);
          };
        
          window.addEventListener('resize', handleResize);
        
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, []);

    useEffect(() => {
        if (isMobileView) {
        setOptions((preOption)=>({perPage: 1, focus: "center"}))
        }else{
            setOptions((preOption)=>({perPage: 2.5, focus: 3, gap: ""}))
        }
    }, [isMobileView]);

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