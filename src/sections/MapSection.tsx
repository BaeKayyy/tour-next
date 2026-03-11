"use client";

import Image from "next/image";
import { useState } from "react";

const regionData: Record<string, string[]> = {
  Java: ["Borobudur", "Bromo", "Prambanan"],
  Bali: ["Uluwatu", "Canggu", "Seminyak"],
  Sumatra: ["Lake Toba", "Bukit Tinggi", "Mentawai"],
  Papua: ["Raja Ampat"],
  NTT: ["Labuan Bajo", "Komodo Island"],
};

const regionPositions = [
  { name: "Sumatra", left: "20%", top: "35%" },
  { name: "Java", left: "35%", top: "65%" },
  { name: "Bali", left: "49%", top: "73%" },
  { name: "NTT", left: "68%", top: "67%" },
  { name: "Papua", left: "82%", top: "50%" },
];

export default function MapSection() {
  const [activeRegion, setActiveRegion] = useState("Java");
  const destinations = regionData[activeRegion];

  return (
    <section id="map" className="w-full bg-white py-16 text-slate-900">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Explore Indonesia
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Choose a region and discover amazing destinations across the
            archipelago.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row">
          <div className="flex-1 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
            <div className="relative h-64 w-full rounded-2xl bg-white">
              <Image
                src="/image/indonesia-map2.jpeg"
                alt="Map of Indonesia"
                fill
                className="pointer-events-none object-contain p-0 opacity-90 scale-[1.15] origin-center"
              />
              {regionPositions.map((region) => {
                const isActive = activeRegion === region.name;
                return (
                  <button
                    key={region.name}
                    type="button"
                    onClick={() => setActiveRegion(region.name)}
                    style={{ left: region.left, top: region.top }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                      isActive
                        ? "border-slate-900 bg-slate-900 text-white shadow-md"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                    }`}
                  >
                    {region.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Selected Region
              </p>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {activeRegion}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold">{activeRegion}</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {destinations.map((place) => (
                <li
                  key={place}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <span>{place}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Explore
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
