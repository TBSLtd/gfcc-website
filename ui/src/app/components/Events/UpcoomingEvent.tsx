'use client'; // Required for interactivity

import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';
import Image, { StaticImageData } from 'next/image';
import gideon from "../../../assets/gideonmandate.webp";

type Event = {
  id: number;
  title: string;
  description: string;
  location: string;
  speaker: string;
  date: Date;
  image?: StaticImageData | string; // FIX: Updated type to allow StaticImageData OR string (for URLs)
};

// Helper component for individual event card with its own countdown
const EventCard = ({ event }: { event: Event }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = event.date.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Set to 0 when time is up
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
  }, [event.date]); // Recalculate if event date changes

  return (
    <div key={event.id} className="w-full h-full max-w-96 mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* Event Image (optional) */}
      {event.image && (
        <div className="hidden--">
          <Image
            src={event.image}
            alt={`${event.title} flyer`}
            className="w-full rounded-t-lg object-cover"
          >
          </Image>
        </div>
      )}

      <div className="py-6 px-4 md:px-3.5 h-full flex-col justify-evenly">
        <div className='flex items-center'>
          <div className='flex w-full p-3 rounded-lg border border-gfcc-SkyBlue items-center justify-between'>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gfcc-Blue">{event.title}</h3>
              <p className="text-gray-600 mb-4 font-lora italic">"{event.description}"</p>
            </div>
            <div className='text-center font-bold px-2 rounded-lg'>
              <p className='text-sm px-2 py-1 rounded-t-lg bg-gfcc-Gold'>{event.date.toLocaleDateString('en-US', { month: 'short' })}</p>
              <p className='text-2xl px-2 text-gfcc-Blue'>{event.date.getDate()}</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 gap-y-3 sm:flex-row py-3 items-center'>
          <div className="flex items-center justify-start w-full ">
            <div className='gap-3 flex flex-col' >
              <div className="flex items-center gap-3 text-gray-700">
                <FaMapMarkerAlt className="mr--2 w-6 text-gfcc-Gold" />
                <span className='font-nunito max-w-56 text-sm'>{event.location}</span>
              </div>
              <div className="flex gap-2 w-full justify-start items-start text-gray-700">
                <FaUserAlt className="mr--2 w-4 text-gfcc-Gold" />
                <span className='text-lg font-great-vibes'>{event.speaker}</span>
              </div>
            </div>
          </div>
          {/* Countdown Timer */}
          <div className='flex items-center'>
            <div className="bg-blue-50 p-4 px-3 rounded-lg mb--6">
              <h4 className="text-center text-sm font-medium mb-3 border-y border-gfcc-Gold text-blue-800">Time Until Event</h4>
              <div className="flex justify-center gap-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#033097]">{timeLeft.days}</div>
                  <div className="text-xs text-gray-600">DAYS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#033097]">{timeLeft.hours}</div>
                  <div className="text-xs text-gray-600">HRS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#033097]">{timeLeft.minutes}</div>
                  <div className="text-xs text-gray-600">MIN</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#033097]">{timeLeft.seconds}</div>
                  <div className="text-xs text-gray-600">SEC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
      date: new Date('2025-05-09T09:00:00'),
      image: gideon,
    },
    {
      id: 2,
      title: "Youth Ablaze Conference",
      description: "Igniting the next generation for Christ.",
      location: "Church Auditorium",
      speaker: "Pastor John Great",
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
    // Add more events as needed
  ]);

  // We no longer need currentEvent state or its useEffect for the global timer
  // const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  // const [timeLeft, setTimeLeft] = useState({ ... }); // This will be per-card now

  // useEffect(() => {
  //   if (events.length > 0) {
  //     setCurrentEvent(events[0]);
  //   }
  // }, [events]);

  // useEffect(() => { ... }, [currentEvent]); // This useEffect is also removed

  if (events.length === 0) return <div>Loading events...</div>;

  return (
    <section className="py-12 px-3 h-full bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gfcc-Blue">UPCOMING EVENTS</h2>
        <div className='h-full grid sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-y-5 gap-x-4'>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Event Navigation is removed as it's not applicable with individual countdowns */}
        {/* {events.length > 1 && (
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
        )} */}
      </div>
    </section>
  );
};

export default UpcomingEvents;