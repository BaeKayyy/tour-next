"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-md transition">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <div className="flex flex-1 items-center">
              <Link
                href="#"
                className="text-base font-semibold tracking-wide text-white transition hover:text-sky-400"
              >
                Explore Nusantara
              </Link>
            </div>

            <div className="hidden flex-1 items-center justify-center md:flex">
              <div className="flex items-center gap-6 text-sm font-medium text-white/90">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition hover:text-sky-400"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-1 items-center justify-end gap-3">
              <Link
                href="#cta"
                className="hidden rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-sky-400 hover:text-sky-400 md:inline-flex"
              >
                Explore
              </Link>

              <button
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={open}
                onClick={() => setOpen((prev) => !prev)}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:border-sky-400 hover:text-sky-400 md:hidden"
              >
                <span className="sr-only">Open menu</span>
                <div className="flex flex-col gap-1">
                  <span className="h-0.5 w-5 rounded-full bg-current" />
                  <span className="h-0.5 w-5 rounded-full bg-current" />
                  <span className="h-0.5 w-5 rounded-full bg-current" />
                </div>
              </button>
            </div>
          </div>

          <div
            className={`md:hidden ${open ? "block" : "hidden"} border-t border-white/10 px-4 py-4`}
          >
            <div className="flex flex-col gap-3 text-sm font-medium text-white/90">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-sky-400"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#cta"
                className="mt-2 inline-flex w-fit rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-sky-400 hover:text-sky-400"
                onClick={() => setOpen(false)}
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
