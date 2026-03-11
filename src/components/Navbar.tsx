"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full pt-4">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="rounded-full border border-white/15 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-md">
          <div className="flex items-center justify-between px-5 py-3 md:px-7">
            <div className="flex flex-1 items-center">
              <Link
                href="#"
                className="text-sm font-semibold tracking-[0.2em] text-white transition hover:text-white/80"
              >
                EXPLORE NUSANTARA
              </Link>
            </div>

            <div className="hidden flex-1 items-center justify-center md:flex">
              <div className="flex items-center gap-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-1 items-center justify-end gap-3">
              <Link
                href="#cta"
                className="hidden rounded-full border border-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 transition hover:bg-white/10 md:inline-flex"
              >
                Schedule Now
              </Link>

              <button
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={open}
                onClick={() => setOpen((prev) => !prev)}
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 p-2 text-white transition hover:bg-white/20 md:hidden"
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
        </div>

        <div
          className={`md:hidden ${open ? "block" : "hidden"} mt-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-white/90 backdrop-blur-md`}
        >
          <div className="flex flex-col gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#cta"
              className="mt-2 inline-flex w-fit rounded-full border border-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              Schedule Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
