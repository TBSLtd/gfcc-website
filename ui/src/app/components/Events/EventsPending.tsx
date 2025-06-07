'use client'; // Required for interactivity

import { useState, useEffect, useRef } from 'react';
import { FaChurch, FaMapMarkerAlt, FaUserAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image, { StaticImageData } from 'next/image';
import gideon from "../../../assets/gideonmandate.webp";

type Event = {
  id: number;
  title: string;
  description: string;
  location: string;
  speaker: string;
  date: Date;
  image?: StaticImageData | string;
};

const UpcomingEvents = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Gideon Mandate",
      description: "Destroying Evil Altars.",
      location: "Goshen, KM 14, Nwaniba Rd, Ekamba Nsukara, Uyo, Nigeria",
      speaker: "Rev Patrick-Grace Henry",
      date: new Date(Date.now()), 
      image: gideon,
    },
    {
      id: 2,
      title: "Gideon Mandate",
      description: "Destroying Evil Altars.",
      location: "Goshen, KM 14, Nwaniba Rd, Ekamba Nsukara, Uyo, Nigeria",
      speaker: "Rev Patrick-Grace Henry",
      date: new Date('2025-07-20T10:00:00'),
      image: gideon,
    },
    {
      id: 3,
      title: "Champions Summit",
      description: "Empowering Leaders for Global Impact.",
      location: "Online (Zoom)",
      speaker: "Dr. Evelyn Adebayo",
      date: new Date('2025-08-10T14:00:00'),
      image: gideon,
    },
    {
      id: 4,
      title: "Youth Ablaze Conference",
      description: "Igniting the next generation for Christ.",
      location: "Church Auditorium",
      speaker: "Pastor John Great",
      date: new Date('2025-09-05T09:00:00'),
      image: gideon,
    },
    {
      id: 5,
      title: "Women of Grace Gathering",
      description: "Empowerment for Kingdom Virtues.",
      location: "Church Annex Hall",
      speaker: "Prophetess Sarah Praise",
      date: new Date('2025-10-12T17:00:00'),
      image: gideon,
    },
    {
      id: 6,
      title: "Annual Harvest Festival",
      description: "Celebrating God's Abundance.",
      location: "Church Ground",
      speaker: "Rev Patrick-Grace Henry",
      date: new Date('2025-11-25T08:30:00'),
      image: gideon,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const carouselRef = useRef<HTMLDivElement>(null);

  // Get cards per view based on screen size
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg
      if (window.innerWidth >= 768) return 2;  // md
      return 1; // sm
    }
    return 1;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate countdown for current event
  useEffect(() => {
    if (events.length === 0) return;

    const currentEvent = events[currentIndex];
    const timer = setInterval(() => {
      const now = new Date();
      const difference = currentEvent.date.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, events]);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const autoScroll = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(autoScroll);
  }, [currentIndex, events.length, cardsPerView]);

  const nextSlide = () => {
    const maxIndex = Math.max(0, events.length - cardsPerView);
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, events.length - cardsPerView);
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
  };

  const goToSlide = (index: number) => {
    const maxIndex = Math.max(0, events.length - cardsPerView);
    setCurrentIndex(Math.min(index, maxIndex));
  };

  if (events.length === 0) return <div>Loading events...</div>;

  return (
    <section className="py-12 px-3 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gfcc-Blue">UPCOMING EVENTS</h2>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200"
            aria-label="Previous events"
          >
            <FaChevronLeft className="text-gfcc-Blue text-xl" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200"
            aria-label="Next events"
          >
            <FaChevronRight className="text-gfcc-Blue text-xl" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden mx-12">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
              }}
            >
              {events.map((event, index) => (
                <div 
                  key={event.id} 
                  className="min-w-0 flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                >
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                    {/* Event Image (optional) */}
                    {event.image && (
                      <div className="hidden--">
                        <Image 
                          src={event.image} 
                          alt={`${event.title} flyer`}
                          className="w-full rounded-t-lg object-cover"
                        />
                      </div>
                    )}

                    <div className="py-6 px-4 md:px-3.5 h--full flex flex-col justify-between">
                      <div className='flex items-center mb-4'>
                        <div className='flex w-full p-3 rounded-lg border border-gfcc-SkyBlue items-center justify-between'>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2 text-gfcc-Blue">{event.title}</h3>
                            <p className="text-gray-600 mb-2 font-lora italic text-sm">"{event.description}"</p>
                          </div>
                          <div className='text-center font-bold px-2 rounded-lg ml-2'>
                            <p className='text-xs px-2 py-1 rounded-t-lg bg-gfcc-Gold'>
                              {event.date.toLocaleDateString('en-US', { month: 'short' })}
                            </p>
                            <p className='text-xl px-2 text-gfcc-Blue'>
                              {event.date.getDate()}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className='flex flex-col gap-3'>  
                        <div className="flex items-start gap-3 text-gray-700">
                          <FaMapMarkerAlt className="w-4 text-gfcc-Gold mt-1 flex-shrink-0" />
                          <span className='font-nunito text-sm'>{event.location}</span>
                        </div>
                        
                        <div className="flex items-center gap-3 text-gray-700">
                          <FaUserAlt className="w-4 text-gfcc-Gold flex-shrink-0" />
                          <span className='text-base font-great-vibes'>{event.speaker}</span>
                        </div>

                        {/* Countdown Timer - Show only for current slide center card */}
                        {index === currentIndex + Math.floor(cardsPerView / 2) && (
                          <div className="bg-blue-50 p-3 rounded-lg mt-2">
                            <h4 className="text-center text-xs font-medium mb-2 border-y border-gfcc-Gold text-blue-800 py-1">
                              Time Until Event
                            </h4>
                            <div className="flex justify-center gap-2">
                              <div className="text-center">
                                <div className="text-lg font-bold text-[#033097]">{timeLeft.days}</div>
                                <div className="text-xs text-gray-600">DAYS</div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-bold text-[#033097]">{timeLeft.hours}</div>
                                <div className="text-xs text-gray-600">HRS</div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-bold text-[#033097]">{timeLeft.minutes}</div>
                                <div className="text-xs text-gray-600">MIN</div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-bold text-[#033097]">{timeLeft.seconds}</div>
                                <div className="text-xs text-gray-600">SEC</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(events.length / cardsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  Math.floor(currentIndex / cardsPerView) === index ? 'bg-blue-700' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;