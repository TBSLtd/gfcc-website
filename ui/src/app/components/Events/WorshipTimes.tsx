'use client';

import { FaClock, FaChurch } from 'react-icons/fa';
import Image from "next/image";
import lift from "@/assets/lifthand.jpg"

const WorshipTimes = () => {
    const worshipSchedule = [
        {
            name: 'Morning Worship',
            time: '5:30 AM - 6:00 AM',
            icon: <FaClock className="text-gfcc-Blue" />
        },
        {
            name: 'Afternoon Worship',
            time: '1:30 PM - 2:00 PM',
            icon: <FaClock className="text-gfcc-Blue" />
        },
        {
            name: 'Evening Worship',
            time: '7:30 PM - 8:00 PM',
            icon: <FaClock className="text-gfcc-Blue" />
        }
    ];

    return (
        <div className="w-full mx-auto px--4 bg-white shadow-md">
            {/* Header */}
            <div className="sm:flex w-full">
                <div className="w-full px-4 sm:w-full">
                    <div className="pt-6 px-2 w-full flex items-center">
                        <FaChurch className="text-gfcc-Blue text-2xl mr-3" />
                        <h2 className="text-xl font-bold text-gfcc-Blue">Worship Times</h2>
                    </div>

                    {/* Schedule */}
                    <div className="p-3">
                        <ul className="divide-y divide-gfcc-Gold/50">
                            {worshipSchedule.map((service, index) => (
                                <li key={index} className="py-3 w-full">
                                    <div className="w-full gap-2 flex flex-wrap items-center justify-between">
                                        <div className="flex items-center">
                                            {service.icon}
                                            <span className="ml-3 font-medium text-gray-900">{service.name}</span>
                                        </div>
                                        <div>
                                            <span className="flex items-center w-fit px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-gfcc-Blue">
                                                {service.time}
                                            </span> 
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Additional Info */}
                        <div className="mt-20 text-sm text-gray-600 italic">
                            <p>All services held at our main sanctuary</p>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-96">
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