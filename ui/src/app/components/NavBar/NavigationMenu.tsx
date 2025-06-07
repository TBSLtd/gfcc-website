'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaCaretDown } from 'react-icons/fa6';
import { useNavigation, type DropdownItem } from './useNavbar';

interface NavigationMenuProps {
  isOpen: boolean;
  scrolled: boolean;
  onClose: () => void;
}

const NavigationMenu = ({ isOpen, scrolled, onClose }: NavigationMenuProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { navLinks, getLinkClasses, pathname } = useNavigation();

  const handleItemClick = () => {
    onClose();
    setIsDropdownOpen(false);
  };

  return (
    <nav className={`${
      isOpen 
        ? "text-gfcc-Blue fixed w-full h-fit inset-y-0 right-0 -z-10 flex flex-col pt-20 px-6 pb-6 backdrop-blur-sm bg-white/85"
        : "hidden"
    } md:static md:flex h-fit md:flex-row md:items-center md:z-auto md:py-2.5 md:px-3 rounded-lg ${scrolled ? 'text-gfcc-Blue/75 md:bg-gfcc-SkyBlue/25 md:backdrop-blur-sm' : ''}`}>
      
      {/* Blur overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 rounded-b-lg bg-gfcc-SkyBlue/20 backdrop-blur-sm -z-10 md:hidden" 
          onClick={onClose} 
        />
      )}

      <ul className="flex flex-col font-semibold space-y-2 md:flex-row md:space-y-0 md:space-x-6 lg:space-x-8">
        {navLinks.map((link, index) => (
          <li key={index} className={link.dropdown ? "relative" : ""}>
            {link.dropdown ? (
              // Dropdown menu
              <div>
                <button
                  className={`${getLinkClasses(link.href, link.dropdown)} flex items-center`}
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
                          pathname === dropItem.href 
                            ? 'bg-gfcc-Blue text-white font-semibold' 
                            : 'md:hover:bg-gfcc-Blue md:hover:text-white'
                        }`}
                        onClick={handleItemClick}
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
                className={getLinkClasses(link.href)}
                onClick={onClose}
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;