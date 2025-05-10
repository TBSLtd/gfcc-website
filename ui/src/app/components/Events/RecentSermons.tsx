'use client';

import { useState } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaCalendarAlt, FaUserAlt } from 'react-icons/fa';

type Sermon = {
  id: number;
  title: string;
  speaker: string;
  date: string;
  duration: string;
  audioUrl: string;
};

const RecentSermons = () => {
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Sample sermon data
  const sermons: Sermon[] = [
    {
      id: 1,
      title: "Arise, Shine",
      speaker: "Rev Patrick-Grace Henry",
      date: "May 8, 2025",
      duration: "42:15",
      audioUrl: "/sermons/arise-shine.mp3"
    },
    {
      id: 2,
      title: "Filled in Him",
      speaker: "Rev Patrick-Grace Henry",
      date: "May 2, 2025",
      duration: "38:22",
      audioUrl: "/sermons/filled-in-him.mp3"
    },
    {
      id: 3,
      title: "Jehovah the Creator",
      speaker: "Rev Patrick-Grace Henry",
      date: "March 28, 2025",
      duration: "45:10",
      audioUrl: "/sermons/jehovah-creator.mp3"
    }
  ];

  const togglePlay = (id: number) => {
    if (currentPlaying === id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentPlaying(id);
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">RECENT SERMONS</h1>
          <p className="text-lg text-gray-600">Listen Our Sermons</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon) => (
            <div key={sermon.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Sermon Thumbnail Placeholder */}
              {/* <div className="h-48 bg-blue-800 flex items-center justify-center">
                <span className="text-white text-xl font-bold">{sermon.title}</span>
              </div> */}

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{sermon.title}</h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <FaUserAlt className="mr-2 text-[#033097]" />
                  <span>By {sermon.speaker}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <FaCalendarAlt className="mr-2 text-[#033097]" />
                  <span>{sermon.date}</span>
                </div>

                {/* Audio Player */}
                <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                  <button 
                    onClick={() => togglePlay(sermon.id)}
                    className="bg-blue-600 hover:bg-[#033097] text-white p-3 rounded-full"
                  >
                    {currentPlaying === sermon.id && isPlaying ? <FaPause /> : <FaPlay />}
                  </button>
                  
                  <div className="flex-1 mx-4">
                    <div className="h-1 bg-gray-300 rounded-full">
                      <div className="h-1 bg-blue-600 rounded-full w-1/3"></div>
                    </div>
                  </div>
                  
                  <span className="text-gray-600">{sermon.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ministries Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">MINISTRIES</h2>
          <p className="text-lg text-gray-600 mb-6">Events & Ministries</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
            View All Ministries
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentSermons;