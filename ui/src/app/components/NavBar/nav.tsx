'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname hook
import { FaBars, FaCaretDown, FaXmark } from 'react-icons/fa6';
import Image from 'next/image';
import logoBlue from "../../../assets/GFCC LOGO BLUE resize.png";
import logoWhite from "../../../assets/GFCC LOGO resize.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Get current pathname

  const SCROLL_THRESHOLD = 50; // Define the scroll threshold - Pixels from the top
  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', handleScroll);     // Add scroll event listener
    return () => window.removeEventListener('scroll', handleScroll);     // Clean up the event listener when the component unmounts
  }, []);   // Empty dependency array means this effect runs once on mount and cleans up on unmount

// Navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Ministries',
      href: '/ministries', // Parent link for Ministries
      dropdown: [
        { name: 'Youth Ministry', href: '/ministries/youth' },
        { name: 'Women\'s Fellowship', href: '/ministries/women' },
        { name: 'Men\'s Group', href: '/ministries/men' },
        { name: 'Children\'s Church', href: '/ministries/children' },
      ]
    },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gfcc-White/75 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 lg:px-8 py-2 flex justify-between items-center">

        {/* Church Logo */}
        <Link className='cursor-pointer' href="/">
          <Image
            src={scrolled ? logoBlue : logoWhite}
            alt="GFCC Church Logo"
            className="z-40 h-12 lg:h-14 2xl:h-24 w-auto transition-all duration-300 ease-in-out" // Corrected 'h--24' to 'w-auto' for better sizing
            priority
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="text-gfcc-Gold text-xl md:hidden z-20 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>

        {/* Navigation Menu */}
        <nav className={`${
          isOpen
            ? "text-gfcc-Blue/70 fixed w-full h-fit inset-y-0 right-0 -z-10 flex flex-col pt-20 px-6 pb-6 backdrop-blur-sm bg-white/85"
            : "hidden"
        } md:static md:flex h-fit md:flex-row md:items-center md:z-auto md:p-3 rounded-lg md:backdrop-blur-xs ${scrolled ? 'text-gfcc-Blue/75 md:bg-gfcc-SkyBlue/20 md:backdrop-blur-sm' : ''} `}>

          {/* Blur overlay for mobile */}
          {isOpen && (
            <div className="fixed inset-0 rounded-b-lg bg-gfcc-SkyBlue/15 backdrop-blur-sm -z-10 md:hidden"
              onClick={() => setIsOpen(false)} />
          )}

          <ul className="flex flex-col font-semibold space-y-2 md:flex-row md:space-y-0 md:space-x-6 lg:space-x-8">
            {navLinks.map((link, index) => {
              // Determine if the current link or any of its dropdown children is active
              const isActive = link.href === pathname ||
                               (link.dropdown && link.dropdown.some(item => item.href === pathname));

              return (
                <li key={index} className={link.dropdown ? "relative" : ""}>
                  {link.dropdown ? (
                    // Dropdown menu
                    <div>
                      <button
                        className={`flex items-center text-lg md:text-base 2xl:text-2xl relative after:bg-gfcc-Gold after:absolute after:h-0.5 after:bottom-0 after:left-0 after:transition-all after:duration-500 transition-all duration-500 ${
                          isActive ? 'text-gfcc-SkyBlue font-bold after:w-full' : 'hover:text-gfcc-SkyBlue hover:font-bold after:w-0 hover:after:w-full'
                        }`}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        {link.name}
                        <FaCaretDown className="ml-1 text-gfcc-Gold" />
                      </button>

                      {isDropdownOpen && (
                        <div className="mt-1 md:absolute md:top-full md:left-0 md:mt-3 md:w-48 md:bg-white md:text-gray-800 md:rounded-md md:shadow-lg md:py-2">
                          {link.dropdown.map((dropItem, dropIndex) => (
                            <Link
                              key={dropIndex}
                              href={dropItem.href}
                              className={`block px-4 py-2 text-base 2xl:text-2xl transition-colors ${
                                dropItem.href === pathname ? 'bg-gfcc-Blue text-white' : 'md:hover:bg-gfcc-Blue md:hover:text-white'
                              }`}
                              onClick={() => {
                                setIsOpen(false);
                                setIsDropdownOpen(false);
                              }}
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // Regular nav link
                    <Link
                      href={link.href}
                      className={`block w-fit text-lg md:text-base 2xl:text-2xl relative after:bg-gfcc-Gold after:absolute after:h-0.5 after:bottom-0 after:left-0 after:transition-all after:duration-300 transition-all duration-300 ${
                        isActive ? 'text-gfcc-SkyBlue font-bold after:w-full' : 'hover:text-gfcc-SkyBlue hover:font-bold after:w-0 hover:after:w-full'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
