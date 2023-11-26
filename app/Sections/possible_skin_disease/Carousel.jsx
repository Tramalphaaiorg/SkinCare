"use client"
import React, { useEffect, useRef, useState } from 'react';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import Card from "./components/Card";
import "./styles/style.css"

export default function Carousel() {
    const options = {
        type: 'loop',
        gap: '',
        interval: 5000,
        perPage: 1,
        omitEnd: false,
        rewind: true,
        autoplay: true,
        pauseOnHover: true,
        resetProgress: false,
        height: 'fit-content',
    };

    return (
        <Splide
            options={options}
            aria-labelledby="autoplay-example-heading"
            className='splide overflow-hidden my-16 w-full'
            hasTrack={true}
        >
            <SplideSlide>
                <Card />
            </SplideSlide>
            <SplideSlide>
                <Card />
            </SplideSlide>
            <SplideSlide>
                <Card />
            </SplideSlide>
            <SplideSlide>
                <Card />
            </SplideSlide>
        </Splide>
    )
}