import Image from "next/image";

export default function CTA() {
  return (
    <section id="cta" className="relative w-full overflow-hidden py-20">
      <Image
        src="/images/cta/cta-landscape.jpg"
        alt="Travel landscape in Indonesia"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center text-white">
        <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
          Start Your Journey Across Indonesia
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-white/80 sm:text-base lg:text-lg">
          Discover breathtaking destinations and unforgettable experiences.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition hover:scale-[1.03] hover:bg-white/20">
            Explore Destinations
          </button>
          <button className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition hover:scale-[1.03] hover:bg-white/10">
            Plan Your Trip
          </button>
        </div>
      </div>
    </section>
  );
}
