'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiChainLightning, GiSparkles } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa6";
import choir from "../../../assets/choir-resize1052.jpg";
import lift from "../../../assets/lifthand.jpg";
import mog from "../../../assets/MOG edited resize.jpg"

const HomeHeroCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    //carousel images
    const sliderImages = [
        { src: choir, alt: "Choir" },
        { src: lift, alt: "Lift Hand" },
        { src: mog, alt: "Lead Pastor" }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % sliderImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [sliderImages.length]);

    return (
        <section
            id="hero"
            className="relative flex items-center justify-center min-h-screen"
        >
            {/* Background Image */}
            <Image
                src={sliderImages[currentImageIndex].src}
                alt={sliderImages[currentImageIndex].alt}
                fill
                className="absolute inset-0 z-0 object-cover"
                priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 from-40% via-gfcc--Blue/40 to-transparent- to-gfcc-Gold/45"></div>

            {/* Content */}
            <div className="relative z-20 max-h-screen flex flex-col pt-40 pb-20 justify-center">
                <div className="flex flex-col gap-3 xl:gap-6 pb-4 items-center justify-end lg:justify-center px-4 text-center text-white">
                    <div className="flex gap-0.5 rounded-full px-2 py-0.5 items-center justify-center bg-gfcc-SkyBlue/35 ">
                        <GiChainLightning className="text-amber-200 text-lg lg:text-3xl" />
                        <span className="lg:text-xs text-[8px]  rounded-full  max-w-fit">
                            Commonwealth of Champions
                        </span>
                    </div>
                    <div className="font-cormorant-garamond font-bold text-2xl md:text-3xl lg:text-3xl">
                        In Grace Family
                    </div>
                    <div className="font-playfair-display flex flex-wrap justify-center mt-4 md:mt-2 pb-3 sm:mb-1 lg:mb-6 bg-linear-to-t from-gfcc-Gold from-15% to-gfcc-White to-75% bg-clip-text text-transparent max-w-7/12 px--8 @min-xs:max-w-6/12 md:max-w-/12 lg:max-w-2xl font-black text-3xl md:text-xl- text--4xl @max-3xl:text-3xl sm:text-4xl md:text-5xl lg:text--6xl xl:text--7xl">
                        God is raising an <span className="w-fit flex gap-0.5 lg:gap-x-2 items-center"><GiChainLightning className="text-amber-200 text-4xl md:text-6xl lg:text-5xl 2xl:text-6xl" /> Army of Champions <GiSparkles className="text-amber-200 text-4xl md:text-6xl lg:text-5xl" /></span>
                    </div>
                    {/* CTA Button */}
                    <Link className="flex mb-10 lg:mb-5 sm:mt-8 z-10 justify-center" href="https://www.youtube.com/@GraceFamilyOutreach" >
                        <button className="inline-flex justify-center items-center sm:text-xs lg:text-lg font-medium hover:font-semibold text-gfcc-White hover:text-gfcc-Gold bg-gfcc-Blue/60 hover:bg-gfcc-SkyBlue/80 transition-colors duration-300 ease-in-out text-[10px]  px-3 py-2 sm:px-4 sm:py-2 rounded-lg">
                            Live Stream
                            <FaYoutube className=" ml-2 text-sm" />
                        </button>
                    </Link>
                </div>


            </div>

            {/* Carousel Indicators (Optional) */}
            <div className="absolute mt-4 bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
                {sliderImages.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                            ? 'bg-gfcc-Gold'
                            : 'bg-white/50 hover:bg-white/70'
                            }`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

        </section>
    );
};

export default HomeHeroCarousel;