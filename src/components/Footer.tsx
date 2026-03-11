import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Blog", href: "#blog" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-700">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-900">
              Explore Nusantara
            </p>
            <p className="mt-4 text-sm text-slate-600">
              Discover breathtaking destinations across Indonesia.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Navigation
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors duration-300 hover:text-slate-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Social
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors duration-300 hover:text-slate-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-xs text-slate-500 text-center">
          © 2026 Explore Nusantara. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
