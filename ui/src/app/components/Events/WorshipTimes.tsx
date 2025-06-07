'use client';

import { FaClock, FaChurch, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from "next/image";
import lift from "@/assets/lifthand.jpg"
import { useState } from 'react';

const WorshipTimes = () => {
    // State to manage the open/closed status of each service's description.
    const [openDescriptions, setOpenDescriptions] = useState<Record<string, boolean>>({});

    // Function to toggle the visibility of a specific service's description
    const toggleDescription = (dayIndex: number, serviceIndex: number) => {
        const key = `${dayIndex}-${serviceIndex}`;
        setOpenDescriptions(prevState => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    const worshipSchedule = [
        {
            day: 'Thursdays',
            services: [
                {
                    name: 'WORD POWER ENCOUNTER',
                    time: '5:30 PM',
                    icon: <FaClock className="w-3 sm:w-3.5 md:w-4 text-gfcc-Blue" />,
                    description: <p>This is a Bible Expository Service designed to equip the members of the church for effective christian living.</p>
                },
            ]
        },
        {
            day: '1st SUNDAYS',
            services: [
                {
                    name: 'SPECIAL COMMUNION SERVICE JOINT ASSEMBLY',
                    time: '8:00 AM',
                    icon: <FaClock className="w-3 sm:w-3.5 md:w-4 text-gfcc-Blue" />,
                    description: <p className='normal-case'>Here, we intentionally come to the table for consecration and encounter with the miraculous in diverse forms of healing, deliverance and breakthrough experience.</p>
                },
            ]
        },
        {
            day: 'Sundays',
            services: [
                {
                    name: 'RISING STARS ASSEMBLY',
                    time: '7:00 AM',
                    icon: <FaClock className="w-3 sm:w-3.5 md:w-4 text-gfcc-Blue" />,
                    description: <p>The whole mission of the Rising Stars Community is about reprogramming the future by inspiring young people with the Word of God to arise early, succeed early and manifest dominion early through intentional Christ-inspired leadership, service to humanity, wealth creation, Kingdom impact and global influence.</p>
                },
                {
                    name: 'CHAMPIONS FAMILY ASSEMBLY',
                    time: '9:30 AM',
                    icon: <FaClock className="w-3 sm:w-3.5 md:w-4 text-gfcc-Blue" />,
                    description: <p>The future begins with the family! Our Champions Family Service brings the revelation of the Word of God to inspire Godly marriages, build visionary families, and spread Kingdom influence through prosperity and excellence in the home, society, marketplace or wherever people are planted.</p>
                },
            ]
        },
    ];

    return (
        <div className="w-full mx-auto bg-white shadow-md">
            <div className="sm:flex w-full">
                <div className="w-full px-3.5 --sm:w-full">
                    <div className="pt-6 px-2 w-full flex items-center">
                        <FaChurch className="text-gfcc-Blue text-2xl mr-3" />
                        <h2 className="text-xl font-bold text-gfcc-Blue">Worship Times</h2>
                    </div>

                    {/* Schedule */}
                    <div className="sm:py-3 lg:px-2">
                        <ul className="divide-y-[1.5px] divide-gfcc-Gold/50">
                            {worshipSchedule.map((days, dayIndex) => (
                                <li key={dayIndex} className='my-3'>
                                    <div className="flex items-center">
                                        <span className="ml-3 font-lora font-semibold uppercase text-gfcc-Gold">{days.day}</span>
                                    </div>
                                    <ul className="divide-y divide-gfcc-Gold/40">
                                        {days.services.map((service, serviceIndex) => {
                                            const serviceKey = `${dayIndex}-${serviceIndex}`;
                                            const isOpen = openDescriptions[serviceKey] || false;

                                            return (
                                                <li key={serviceIndex} className="py-1 sm:py-3 w-full">
                                                    <div className="w-full gap-y-2.5 gap-x-1.5 sm:gap-x-2 flex items-center justify-between">
                                                        <div className="flex gap-x-2 sm:gap-x-3 w-full items-center">
                                                            {service.icon}
                                                            <span className=" font-medium w-fit text-sm lg:text-base capitalize text-gray-900">{service.name}</span>
                                                        </div>
                                                        <div className='flex w--3/4 justify-end'>
                                                            <span className="flex items-center min-w-20 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-gfcc-Blue">
                                                                {service.time}
                                                            </span>
                                                            <button
                                                                className="flex items-center cursor-pointer w-fit hover:bg-gray-50 p-2 rounded-md transition-colors duration-200"
                                                                onClick={() => toggleDescription(dayIndex, serviceIndex)}
                                                                aria-label={ isOpen ? "Show less" : "Show more"}
                                                                title= {isOpen ? "Show less" : "Show more"}
                                                            >
                                                                {/* <span className="ml-1 font-medium text-gfcc-SkyBlue/60 hover:text-gfcc-SkyBlue transition-colors duration-200">
                                                                    {isOpen ? "Show less" : "Show more"}
                                                                </span> */}
                                                                {isOpen ? (
                                                                    <FaChevronUp className="text-gfcc-SkyBlue/60 text-sm" />
                                                                ) : (
                                                                    <FaChevronDown className="text-gfcc-SkyBlue/60 text-sm" />
                                                                )}
                                                            </button>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Enhanced Toggle Button */}
                                                    <div className="flex flex-col mt-3 items-start">

                                                        
                                                        {/* Enhanced Collapsible Description with Animation */}
                                                        <div className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
                                                            isOpen 
                                                                ? 'max-h-96 opacity-100 mt-2' 
                                                                : 'max-h-0 opacity-0 mt-0'
                                                        }`}>
                                                            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gfcc-Blue">
                                                                <span className="text-sm text-gray-700 leading-relaxed">
                                                                    {service.description}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                            ))}
                        </ul>

                        {/* Additional Info */}
                        <div className="mt-20 text-sm text-gray-600 italic">
                            <p>All services held at our main sanctuary</p>
                        </div>
                    </div>
                </div>
                <div className="relative w-full min-h-96 md:min-h-full">
                    <Image
                        src={lift}
                        alt="lifted"
                        fill
                        className="object-cover"
                        quality={80}
                        priority={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default WorshipTimes;