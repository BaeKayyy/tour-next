import DestinationCard from "../components/DestinationCard";

const destinations = [
  {
    title: "Raja Ampat",
    subtitle: "Paradise of Papua Islands",
    image: "/image/raja-ampat 2.jpg",
    tag: "Top Destination",
    className: "h-[260px] sm:h-[300px] lg:col-span-2",
  },
  {
    title: "Mount Bromo",
    subtitle: "Sunrise above the volcano",
    image: "/image/bromo-2.jpg",
    className: "h-[260px] sm:h-[300px]",
  },
  {
    title: "Labuan Bajo",
    subtitle: "Gateway to Komodo Island",
    image: "/image/labuan-bajo.jpg",
    className: "h-[220px] sm:h-[240px]",
  },
  {
    title: "Borobudur Temple",
    subtitle: "Ancient Buddhist heritage",
    image: "/image/borobudur.jpg",
    className: "h-[220px] sm:h-[240px]",
  },
  {
    title: "Prambanan Temple",
    subtitle: "Majestic Hindu temple complex",
    image: "/image/prambanan.jpg",
    className: "h-[220px] sm:h-[240px]",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="w-full bg-white py-16 text-slate-900">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              Explore Nusantara
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              The Journey of Nusantara
            </h2>
          </div>
          <div className="max-w-md text-sm text-slate-600">
            <p>
              This journey offers an unforgettable experience that blends
              adventure, culture, and natural beauty across Indonesia.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-slate-800">
                Reminder Me
              </button>
              <button className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:bg-slate-100">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.title} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
