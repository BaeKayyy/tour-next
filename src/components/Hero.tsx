"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const slides = [
  {
    src: "/image/komodo-island.jpg",
    alt: "Komodo Island's rugged coastline and turquoise waters",
  },
  {
    src: "/image/raja-ampat 2.jpg",
    alt: "Turquoise lagoons in Raja Ampat",
  },
  {
    src: "/image/borobudur.jpg",
    alt: "Ancient Borobudur temple at sunset",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .from(".hero-title", { autoAlpha: 0, y: 24, duration: 1 })
        .from(".hero-subtitle", { autoAlpha: 0, y: 20, duration: 0.9 }, "-=0.6")
        .from(".hero-cta", { autoAlpha: 0, scale: 0.95, duration: 0.8 }, "-=0.5");

      if (backgroundRef.current && sectionRef.current) {
        gsap.to(backgroundRef.current, {
          y: 60,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => context.revert();
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden text-white"
    >
      <div ref={backgroundRef} className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <Image
              src={activeSlide.src}
              alt={activeSlide.alt}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/25 to-black/10" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/60" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-xl">
            <div className="hero-badge inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur-sm">
              A Place Where Nature and Adventure Unite
            </div>

            <h1 className="hero-title mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Explore Nusantara
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
      </div>
    </section>
  );
}
