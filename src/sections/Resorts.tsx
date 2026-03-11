import ResortCard from "../components/ResortCard";

const resorts = [
  {
    name: "Labuyan Bajo Resort",
    location: "Gili Trawangan, Lombok",
    price: "IDR 397.000",
    rating: "4.9",
    reviews: "687",
    image: "/image/tropical-resort.jpg",
  },
  {
    name: "Bromo resort",
    location: "Bromo, East Java",
    price: "IDR 427.000",
    rating: "4.9",
    reviews: "938",
    image: "/image/bromo-resort.jpg",
  },
  {
    name: "beach resort",
    location: "Pantai kuta, Bali",
    price: "IDR 480.000",
    rating: "4.7",
    reviews: "2.453",
    image: "/image/bali-villa.jpg",
  },
];

export default function Resorts() {
  return (
    <section id="resorts" className="w-full bg-white py-16 text-slate-900">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              Featured Offers
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Unlock Exclusive Travel Deals
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Discover unbeatable offers on flights, accommodations, and
              adventures across Indonesia.
            </p>
            <button className="mt-6 rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-slate-800">
              Show more
            </button>

            <div className="mt-6 h-28 rounded-xl border border-dashed border-slate-200 bg-slate-50" />
          </div>

          <ResortCard
            {...resorts[0]}
            index={0}
            className="h-55 sm:h-75"
          />

          <ResortCard
            {...resorts[1]}
            index={1}
            className="h-55 sm:h-75"
          />
          <ResortCard
            {...resorts[2]}
            index={2}
            className="h-55 sm:h-75"
          />
        </div>
      </div>
    </section>
  );
}
