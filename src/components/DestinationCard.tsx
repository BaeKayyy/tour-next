"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type DestinationCardProps = {
  title: string;
  subtitle: string;
  image: string;
  tag?: string;
  className?: string;
  index?: number;
};

export default function DestinationCard({
  title,
  subtitle,
  image,
  tag,
  className,
  index,
}: DestinationCardProps) {
  return (
    <motion.div
      className={`destination-card group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)] ${className ?? ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: typeof index === "number" ? index * 0.1 : 0,
      }}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      {tag ? (
        <span className="absolute left-4 top-4 rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
          {tag}
        </span>
      ) : null}

      

      <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
          {subtitle}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
      </div>
    </motion.div>
  );
}
