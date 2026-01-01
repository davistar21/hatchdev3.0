"use client";

import { useRouter } from "next/navigation";

export interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  rating: number;
  reviewsCount: number;
}

const Product: React.FC<ProductProps> = ({
  id,
  name,
  description,
  price,
  brand,
  category,
  rating,
  reviewsCount,
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/products/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {/* Product Header */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1">{name}</h2>
        <p className="text-sm text-gray-500 mb-3">
          {brand} &middot; {category}
        </p>

        {/* Rating */}
        <div className="flex items-center text-sm text-yellow-500 mb-4">
          <span className="font-semibold">{rating.toFixed(1)}</span>
          <span className="ml-2 text-gray-500">
            ({reviewsCount.toLocaleString()} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm line-clamp-3 mb-4">{description}</p>

        {/* Price */}
        <div className="text-lg font-semibold text-blue-600 mb-4">
          ${price.toFixed(2)}
        </div>

        {/* CTA Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
