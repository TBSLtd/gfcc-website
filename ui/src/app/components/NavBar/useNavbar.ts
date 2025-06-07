import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Type definitions
export interface DropdownItem {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
}

// Custom hook for scroll effect
export const useScrollEffect = (threshold: number = 50) => {
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  const SCROLL_THRESHOLD = threshold;
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', handleScroll);    // Add scroll event listener
    return () => window.removeEventListener('scroll', handleScroll);    // Clean up the event listener when the component unmounts
  }, []);   // Empty dependency array means this effect runs once on mount and cleans up on unmount - performance optimization

  return scrolled;
};

// Custom hook for navigation logic
export const useNavigation = () => {
  const pathname = usePathname();
  
  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { 
      name: 'Ministries', 
      href: '/ministries',
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

  const isActive = (href: string, dropdown?: DropdownItem[]) => 
    pathname === href || (dropdown && dropdown.some(item => pathname === item.href));

  const getLinkClasses = (href: string, dropdown?: DropdownItem[]) => {
    const base = "block w-fit text-lg md:text-base 2xl:text-2xl relative after:bg-gfcc-Gold after:absolute after:h-0.5 after:bottom-0 after:left-0 after:transition-all after:duration-500 transition-all duration-500";
    return isActive(href, dropdown) 
      ? `${base} text-gfcc-SkyBlue font-bold after:w-full`
      : `${base} hover:text-gfcc-SkyBlue hover:font-bold hover:after:w-full after:w-0`;
  };

  return { navLinks, isActive, getLinkClasses, pathname };
};