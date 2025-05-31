'use client'; // Required for interactivity

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import lift from "@/assets/lifthand.jpg";
import MoG from "@/assets/MOG.jpg"
import choir from "@/assets/choir.jpg"

const CarouselHeader = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Sample carousel images (replace with your church images)
    const slides = [
        { id: 1, image: lift, alt: 'Church building' },
        { id: 2, image: MoG, alt: 'Worship service' },
        { id: 3, image: choir, alt: 'Community event' },
    ];

    // Auto-rotate slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="relative- h-full overflow--hidden w-full">
            {/* Carousel Slides */}
            <div className="relative h-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.alt}
                            fill
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute my-[300px] mx-[300px]">
                            <h4 className=" text-4xl w-4xl text-center">
                                In Grace Family <br /> God is raising an Army of Champions <br />from ordinary people.
                            </h4>

                        </div>
                        <Link href="https://www.youtube.com/@GraceFamilyOutreach" >
                            <button className="absolute bg-[#024eff] hover:bg-gfcc-Blue text-white px-6 py-2 rounded-lg font-medium justify-center left-[630px] top-2/3">
                                View All Ministries
                            </button>
                        </Link>
                    </div>
                ))}
            </div>


            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default CarouselHeader;