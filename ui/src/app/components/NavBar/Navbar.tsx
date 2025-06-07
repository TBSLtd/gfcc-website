'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaXmark } from 'react-icons/fa6';
import Image from 'next/image'; 
import logoBlue from "../../../assets/GFCC LOGO BLUE resize.png";
import logoWhite from "../../../assets/GFCC LOGO resize.png";
import { useScrollEffect } from './useNavbar';
import NavigationMenu from './NavigationMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollEffect(50);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gfcc-White/75 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 lg:px-8 py-2 flex justify-between items-center">
        
        {/* Church Logo */}
        <Link className='cursor-pointer' href="/">
          <Image 
            src={scrolled ? logoBlue : logoWhite}
            alt="GFCC Church Logo"
            className="z-40 h-12 lg:h-14 2xl:h-24 w-auto transition-all duration-300 ease-in-out"
            priority
          />
        </Link>

        {/* Mobile menu button */}
        <button 
          className="text-gfcc-Gold text-xl md:hidden z-20"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>

        {/* Navigation Menu */}
        <NavigationMenu 
          isOpen={isOpen} 
          scrolled={scrolled} 
          onClose={() => setIsOpen(false)} 
        />
        
      </div>
    </header>
  );
};

export default Navbar;