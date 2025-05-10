import CarouselHeader from "./components/Carousel/CarouselHeader";
import RecentSermons from "./components/Events/RecentSermons";
import UpcomingEvents from "./components/Events/UpcoomingEvent";
import WorshipTimes from "./components/Events/WorshipTimes";

export default function Home() {
  return (
    <div className="">
      {/* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"> */}
        <CarouselHeader />
        <UpcomingEvents />
        <WorshipTimes />
        <RecentSermons />
      {/* </main> */}
    </div>
  );
}
