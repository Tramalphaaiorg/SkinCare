"use client"
import React, { useEffect, useRef, useState } from 'react';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import { Splide, SplideSlide} from '@splidejs/react-splide';
import ReviewCard from './ReviewCard';
import { useMediaQuery } from 'react-responsive';


export const Reviews = () => {
    const [options, setOptions] = useState({
        type: 'loop',
        gap: '',
        interval: 3000,
        perPage: 2,
        omitEnd: false,
        rewind: true,
        autoplay: true,
        pauseOnHover: true,
        resetProgress: false,
        height: 'fit-content',
    });

    const isBigScreen = useMediaQuery({ query: '(min-width: 1020px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 950px)'});

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