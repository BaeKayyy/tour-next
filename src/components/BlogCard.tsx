"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type BlogCardProps = {
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
  index?: number;
};

export default function BlogCard({
  category,
  title,
  description,
  image,
  href,
  index,
}: BlogCardProps) {
  return (
    <motion.article
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:scale-[1.01]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: typeof index === "number" ? index * 0.1 : 0,
      }}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </div>
      <div className="p-5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
          {category}
        </span>
        <h3 className="mt-2 text-base font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:text-slate-900"
        >
          Read more
          <span className="text-sm">-&gt;</span>
        </Link>
      </div>
    </motion.article>
  );
}
