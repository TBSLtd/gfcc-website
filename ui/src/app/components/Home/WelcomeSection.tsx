'use client';

import Image from "next/image";
import worship from "../../../assets/worship.webp";
// import Link from "next/link";

const Welcome = () => {
  return (
    <section className="py-12 bg-gfcc-White">
      <div className="shadow-md flex flex-col sm:flex-row gap-4 py--2 xl:py--8 px--4 sm:px--2 lg:px--8 bg-gfcc-White text-center sm:text-start">
        {/* optional side img */}
        <div className="w-fit hidden--">
          <Image
            src={worship}
            alt = "worship"
            className="md:max-w-xs sm:max-w-sm xl:max-w-lg h-full"
          >
          </Image>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col items-center sm:items-start py-12 px-2 sm:px-2.5 md:px-4 justify-center">
          {/* Headline */}
          <p className="bg-gfcc-Gold/25 py-1 px-3 text-[8px]  lg:text-[10px] xl:text-sm 2xl:text-lg rounded-full  max-w-fit font-black text-gfcc-Blue font-lora">
            <span role="img" aria-label="welcome hands emoji" className="mr-2 align-middle">🙌</span>Welcome to GFCC<span role="img" aria-label="angel emoji" className="ml-2 align-middle">😇</span>
          </p>

          <h2 className="my-3 mb-2 md:my-6 uppercase text-xl sm:text-2xl md:text-3xl xl:text--5xl 2xl:text-6xl font-black text-gfcc-Blue font-playfair-display ">
            <span role="img" aria-label="welcome hands emoji" className="mr-2 text-lg align-middle"></span>Welcome to  Grace Family !<span role="img" aria-label="angel emoji" className="ml-2 text-3xl align-middle"></span>
          </h2>
          {/* Sub-Headline/Tagline */}
          <p className="text-xs sm:text-sm xl:text--2xl 2xl:text-3xl font-bold text-gfcc-Gold font-lora italic--">
            Raising Champions<span role="img" aria-label="sparkles emoji" className="ml-1">✨</span>. Revealing Sonship<span role="img" aria-label="star emoji" className="ml-1">🌟</span>. Establishing God's Government<span role="img" aria-label="crown emoji" className="ml-1">👑</span>.
          </p>

          {/* Body Copy */}
          <p className="mt-6 text-sm sm:text-base xl:text--xl 2xl:text-3xl text-gray-700 max-w-11/12 lg:max-w--full lg:max-w-8/12 xl:max-w-9/12 2xl:max-w-full text-wrap px--2 md:px-1 lg:px--8 xl:px-2 2xl:px-2 mx--auto md:mx-0 leading-relaxed font-nunito">
            We are a family-driven, Holy Spirit-led movement with a mandate to raise champions from ordinary people. Here, you'll discover your true identity and sonship in Christ, empowered by the transformative power of God's Word and the Holy Spirit to live in power, dominion, and fulfill your divine purpose in every sphere of life. <br />Your journey to transformation and impact begins now.
          </p>

          {/* CTA Button */}
          {/* <div className="mt-12">
            <button className="
              inline-block px-3 py-2 sm:px-4 md:px-6 sm-:py-2 2xl:px-8 2xl:py-4
              bg-gfcc-SkyBlue text-gfcc-White
              text-xs md:text-sm lg:text-lg 2xl:text-xl font-bold rounded-lg
              transition-all duration-300 ease-in-out
              hover:scale-105
              hover:shadow-xl hover:shadow-gfcc-Blue/40
              hover:bg-gfcc-Blue 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gfcc-SkyBlue focus-visible:ring-offset-2
            ">
              <Link href={"/about"}> Learn More About Us</Link>
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Welcome;