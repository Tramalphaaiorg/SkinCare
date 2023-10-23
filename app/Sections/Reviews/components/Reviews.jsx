"use client"
import React, { useEffect, useRef, useState } from 'react';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import { Splide, SplideSlide} from '@splidejs/react-splide';
import ReviewCard from './ReviewCard';


export const Reviews = () => {
    const [options, setOptions] = useState({
        type: 'loop',
        gap: '',
        interval: 3000,
        // drag: "free",
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
        setOptions((preOption)=>({perPage: 1, focus: "center", gap: "2rem"}))
        }else{
            setOptions((preOption)=>({perPage: 2.5, focus: 0, gap: ""}))
        }
    }, [isMobileView]);

    return (
        <Splide
            options={options}
            aria-labelledby="autoplay-example-heading"
            className='splide overflow-x-auto sm:flex-1 min-w-[20rem] w-[20rem] sm:justify-normal justify-center mx-auto'
            hasTrack={true}
        >
            <SplideSlide>
                <ReviewCard val={0} />
            </SplideSlide>
            <SplideSlide>
                <ReviewCard val={1} />
            </SplideSlide>
            <SplideSlide>
                <ReviewCard val={2} />
            </SplideSlide>
            <SplideSlide>
                <ReviewCard val={3} />
            </SplideSlide>
            <SplideSlide>
                <ReviewCard val={4} />
            </SplideSlide>
            <SplideSlide>
                <ReviewCard  val={5}/>
            </SplideSlide>
        </Splide>
    );
};