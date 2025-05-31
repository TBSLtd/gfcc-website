
import HomeHeroCarousel from "./components/Carousel/HomeHero";
import RecentSermons from "./components/Events/RecentSermons";
import UpcomingEvents from "./components/Events/UpcoomingEvent";
import WorshipTimes from "./components/Events/WorshipTimes";
import Navbar from "./components/navbar";
export default function Home() {
  return (
    <div className="h-full w-full scroll-smooth">
      {/* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"> */}
        <Navbar />
        <HomeHeroCarousel />
        <UpcomingEvents />
        <WorshipTimes />
        <RecentSermons />
      {/* </main> */}
    </div>
  );
}
