'use client'; // Required for interactivity

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import churchLogo from "../../../assets/GFCC LOGO BLUE.png";
import lift from "@/assets/lifthand.jpg";
import MoG from "@/assets/MOG.jpg"
import choir from "@/assets/choir.jpg"

const CarouselHeader = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Sample carousel images (replace with your church images)
  const slides = [
    { id: 1, image: lift , alt: 'Church building' },
    { id: 2, image: MoG , alt: 'Worship service' },
    { id: 3, image: choir , alt: 'Community event' },
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <header className="relative h-[700px] overflow-hidden w-full">
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
            <div className="absolute ">
                <h4 className="text-2xl relative  justify-self-center">
                    hello
                </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Logo and Navbar */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Church Logo */}
          <Link href="/">
            <img 
              src={churchLogo.src} 
              alt="Church Logo"
              className="h-24 w-auto" 
            />
          </Link>

          {/* Navigation with Dropdown */}
          <nav className="hidden md:flex items-center space-x-8 text-white">
            <Link href="/" className="hover:text-[#033097]">Home</Link>
            <Link href="/about" className="hover:text-[#033097]">About Us</Link>
            
            {/* Dropdown Menu */}
            <div className="relative">
              <button 
                className="flex items-center hover:text-[#033097]"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Ministries
                {isDropdownOpen ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-2 z-20">
                  <Link href="/ministries/youth" className="block px-4 py-2 hover:bg-[#033097] hover:text-white">Youth Ministry</Link>
                  <Link href="/ministries/women" className="block px-4 py-2 hover:bg-[#033097] hover:text-white">Women's Fellowship</Link>
                  <Link href="/ministries/men" className="block px-4 py-2 hover:bg-[#033097] hover:text-white">Men's Group</Link>
                  <Link href="/ministries/children" className="block px-4 py-2 hover:bg-[#033097] hover:text-white">Children's Church</Link>
                </div>
              )}
            </div>

            <Link href="/events" className="hover:text-[#033097]">Events</Link>
            <Link href="/contact" className="hover:text-[#033097]">Contact</Link>
          </nav>

          {/* Mobile Menu Button (optional) */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
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
    </header>
  );
};

export default CarouselHeader;