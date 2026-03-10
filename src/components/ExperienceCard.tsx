import Image from "next/image";

type ExperienceCardProps = {
  title: string;
  subtitle: string;
  image: string;
  tag?: string;
  className?: string;
};

export default function ExperienceCard({
  title,
  subtitle,
  image,
  tag,
  className,
}: ExperienceCardProps) {
  return (
    <div
      className={`experience-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm ${className ?? ""}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      {tag ? (
        <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
          {tag}
        </span>
      ) : null}

      

      <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
          {subtitle}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
}
