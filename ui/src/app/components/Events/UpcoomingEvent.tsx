'use client'; // Required for interactivity

import { useState, useEffect } from 'react';
import { FaChurch, FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';

type Event = {
  id: number;
  title: string;
  description: string;
  location: string;
  speaker: string;
  date: Date;
  image?: string;
};

const UpcomingEvents = () => {
  // Sample events data (replace with your actual data or API fetch)
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Gideon Mandate",
      description: "Destroying Evil Altars.",
      location: "Goshen, KM 14, Nwaniba Rd, Ekamba Nsukara, Uyo, Nigeria",
      speaker: "Rev Patrick-Grace Henry",
      date: new Date(Date.now() ), 
    },
    // Add more events as needed
  ]);

  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (events.length > 0) {
      setCurrentEvent(events[0]);
    }
  }, [events]);

  useEffect(() => {
    if (!currentEvent) return;

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
  }, [currentEvent]);

  if (!currentEvent) return <div>Loading events...</div>;

  return (
    <section className="py-12 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#033097]">UPCOMING EVENTS</h2>
        
        <div className="w-full mx-auto shadow-md overflow-hidden">
          {/* Event Image (optional) */}
          {currentEvent.image && (
            <div className="h-48 bg-blue-800 overflow-hidden">
              <img 
                src={currentEvent.image} 
                alt={currentEvent.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="pt-6 flex justify-evenly">
            <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{currentEvent.title}</h3>
                <p className="text-gray-600 mb-4 italic">"{currentEvent.description}"</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-700">
                    <FaMapMarkerAlt className="mr-2 text-blue-600" />
                    <span>{currentEvent.location}</span>
                </div>
                <div className="flex items-center text-gray-700">
                    <FaUserAlt className="mr-2 text-blue-600" />
                    <span>{currentEvent.speaker}</span>
                </div>
                </div>
            </div>

            {/* Countdown Timer */}
            <div>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="text-center font-medium mb-3 text-blue-800">Time Until Event</h4>
                <div className="flex justify-center gap-4">
                    <div className="text-center">
                    <div className="text-2xl font-bold text-[#033097]">{timeLeft.days}</div>
                    <div className="text-sm text-gray-600">DAYS</div>
                    </div>
                    <div className="text-center">
                    <div className="text-2xl font-bold text-[#033097]">{timeLeft.hours}</div>
                    <div className="text-sm text-gray-600">HRS</div>
                    </div>
                    <div className="text-center">
                    <div className="text-2xl font-bold text-[#033097]">{timeLeft.minutes}</div>
                    <div className="text-sm text-gray-600">MIN</div>
                    </div>
                    <div className="text-center">
                    <div className="text-2xl font-bold text-[#033097]">{timeLeft.seconds}</div>
                    <div className="text-sm text-gray-600">SEC</div>
                    </div>
                </div>
                </div>
            </div>

            
          </div>
        </div>

        {/* Event Navigation (if multiple events) */}
        {events.length > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {events.map((event) => (
              <button
                key={event.id}
                onClick={() => setCurrentEvent(event)}
                className={`w-3 h-3 rounded-full ${currentEvent.id === event.id ? 'bg-blue-700' : 'bg-gray-300'}`}
                aria-label={`View ${event.title}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;