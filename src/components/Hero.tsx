import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      <Image
        src="/image/bromo-2.jpg"
        alt="Bromo mountain at sunrise"
        fill
        priority
        className="object-cover"
      />

      

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-xl">
            <div className="hero-badge inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur-sm">
              A Place Where Nature and Adventure Unite
            </div>

            <h1 className="hero-title mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Experience the
              <span className="block text-white/90">Magic of Bromo</span>
            </h1>

            <p className="hero-subtitle mt-5 max-w-lg text-sm text-white/75 sm:text-base lg:text-lg">
              Discover cinematic landscapes, golden sunrises, and otherworldly
              volcanic valleys across Indonesia.
            </p>

            <div className="hero-cta mt-8 flex items-center gap-4">
              <button className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition hover:scale-[1.02]">
                Explore Now
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs text-white">
                  -&gt;
                </span>
              </button>
            </div>

            <div className="hero-features mt-12 grid gap-4 text-xs text-white/80 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-xs font-semibold">
                    02
                  </span>
                  <p>
                    Provides a visual representation of destinations,
                    attractions, and activities.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-xs font-semibold">
                    08
                  </span>
                  <p>
                    Provides travelers with a more accurate and reliable
                    perspective of the destination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-social absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-3 text-white/70 md:flex">
          {["IG", "FB", "YT"].map((item) => (
            <span
              key={item}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[10px] font-semibold tracking-[0.2em] uppercase backdrop-blur-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
