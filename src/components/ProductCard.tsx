import Image from "next/image";

interface ProductCardProps {
  title: string;
  subtitle: string;
  image: string;
  badge: string;
}

export default function ProductCard({ title, subtitle, image, badge }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-red-600 text-white text-xs px-4 py-1 rounded-full font-medium">{badge}</span>
        </div>

        <div className="relative h-[320px] overflow-hidden rounded-3xl">
          <Image
            src={image}
            alt={title}
            fill
            className="
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-2xl font-bold">{title}</h3>

            <p className="text-sm text-white/80 mt-1">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
