import ExperienceCard from "../components/ExperienceCard";

const experienceCards = [
  {
    title: "Raja Ampat, Above the Clouds",
    subtitle: "The beauty of Explore Nusantara",
    image: "/images/experiences/raja-ampat.jpg",
    tag: "Most inspiring",
    className: "h-[260px] sm:h-[300px] lg:col-span-2",
  },
  {
    title: "Lava Jeep Tour",
    subtitle: "Jeep ride around Bromo",
    image: "/images/experiences/bromo-jeep.jpg",
    className: "h-[260px] sm:h-[300px]",
  },
  {
    title: "Hiking on Bromo",
    subtitle: "Memorable experience",
    image: "/images/experiences/bromo-hike.jpg",
    className: "h-[220px] sm:h-[240px]",
  },
  {
    title: "Borobudur Sunrise",
    subtitle: "Culture and tradition",
    image: "/images/experiences/borobudur.jpg",
    className: "h-[220px] sm:h-[240px]",
  },
  {
    title: "Komodo Horse Riding",
    subtitle: "Unforgettable journey",
    image: "/images/experiences/komodo-horse.jpg",
    className: "h-[220px] sm:h-[240px]",
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="w-full bg-black py-16 text-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
              Explore Nusantara
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              The Journey of Indonesia
            </h2>
          </div>
          <div className="max-w-md text-sm text-white/70">
            <p>
              Discover unforgettable experiences that blend adventure, culture,
              and natural beauty across the Indonesian archipelago.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-white/90">
                Reminder Me
              </button>
              <button className="rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {experienceCards.map((card) => (
            <ExperienceCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
