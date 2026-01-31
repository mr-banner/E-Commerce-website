import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="group">
      <div className="bg-gray-100 aspect-3/4 mb-3 overflow-hidden">
        <Image
          src={product.image_url}
          width={280}
          height={380}
          alt={product.name}
          unoptimized
          className="w-full h-auto cursor-pointer object-contain group-hover:scale-105 transition"
        />
      </div>
      <h3 className="sm:text-sm text-xs font-medium">{product.name}</h3>
      <p className="sm:text-sm text-xs text-gray-600">₹{product.price}</p>
    </div>
  );
}
