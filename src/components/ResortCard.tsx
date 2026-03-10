import Image from "next/image";

type ResortCardProps = {
  name: string;
  location: string;
  price: string;
  rating: string;
  reviews: string;
  image: string;
  className?: string;
};

export default function ResortCard({
  name,
  location,
  price,
  rating,
  reviews,
  image,
  className,
}: ResortCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:scale-[1.01] ${className ?? ""}`}
    >
      <Image src={image} alt={name} fill className="object-cover" />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute bottom-4 left-4 right-4 text-white">
        <p className="text-sm font-semibold">{name}</p>
        <p className="mt-1 text-xs text-white/80">{location}</p>

        <div className="mt-3 flex items-center justify-between text-xs text-white/85">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-[10px]">
              ★
            </span>
            <span className="font-semibold">{rating}</span>
            <span className="text-white/70">{reviews} Review</span>
          </div>
          <span className="font-semibold">{price}</span>
        </div>
      </div>
    </div>
  );
}
