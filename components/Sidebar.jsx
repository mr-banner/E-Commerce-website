"use client";

import { useState } from "react";

export default function Sidebar({ filters, setFilters }) {
  const [showBrands, setShowBrands] = useState(true);
  const [showCollections, setShowCollections] = useState(true);

  const sizes = ["S", "M", "L", "XL"];
  const colors = ["red", "blue", "green", "yellow", "black"];
  const prices = [500, 1000, 1500, 2000];
  const brands = [
    { label: "Zara", value: "zara" },
    { label: "Levi's", value: "levi's" },
    { label: "US Polo", value: "US-polo" },
  ];

  const collections = ["All Products", "Best Sellers", "New Arrivals"];
  const tags = ["Casual", "Formal", "Printed", "Solid"];

  return (
    <div className="space-y-8 text-sm max-md:text-xs">
      <h1 className="text-2xl font-bold max-sm:text-lg">Filters</h1>
      <div>
        <h3 className="font-semibold mb-2">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() =>
                setFilters((f) => ({
                  ...f,
                  size: f.size === size ? null : size,
                }))
              }
              className={`border px-3 py-1 rounded text-xs transition cursor-pointer
                ${filters.size === size ? "bg-black text-white" : "hover:bg-gray-100"}
              `}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Colors</h3>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() =>
                setFilters((f) => ({
                  ...f,
                  color: f.color === color ? null : color,
                }))
              }
              className={`w-5 h-5 rounded-full border transition cursor-pointer
                ${filters.color === color ? "ring-1 ring-black/55" : ""}
              `}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Prices</h3>
        <ul className="space-y-1">
          {prices.map((price) => (
            <li
              key={price}
              onClick={() =>
                setFilters((f) => ({
                  ...f,
                  price: f.price === price ? null : price,
                }))
              }
              className={`cursor-pointer transition 
                ${filters.price === price ? "font-semibold underline" : "hover:underline"}
              `}
            >
              Under ₹{price}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button
          onClick={() => setShowBrands(!showBrands)}
          className="w-full flex justify-between font-semibold mb-2 cursor-pointer"
        >
          Brands
          <span>{showBrands ? "−" : "+"}</span>
        </button>

        {showBrands && (
          <ul className="space-y-1 text-gray-600">
            {brands.map(({ label, value }) => (
              <li
                key={value}
                onClick={() =>
                  setFilters((f) => ({
                    ...f,
                    brand: f.brand === value ? null : value,
                  }))
                }
                className={`cursor-pointer transition
            ${filters.brand === value ? "text-black font-medium" : ""}
          `}
              >
                {label}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <button
          onClick={() => setShowCollections(!showCollections)}
          className="w-full flex justify-between cursor-pointer font-semibold mb-2"
        >
          Collections
          <span>{showCollections ? "−" : "+"}</span>
        </button>

        {showCollections && (
          <ul className="space-y-1 text-gray-600">
            {collections.map((col) => (
              <li
                key={col}
                onClick={() =>
                  setFilters((f) => ({
                    ...f,
                    collection: f.collection === col ? null : col,
                  }))
                }
                className={`cursor-pointer
                  ${filters.collection === col ? "text-black font-medium" : ""}
                `}
              >
                {col}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h3 className="font-semibold mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() =>
                setFilters((f) => ({
                  ...f,
                  tags: f.tags?.includes(tag)
                    ? f.tags.filter((t) => t !== tag)
                    : [...(f.tags || []), tag],
                }))
              }
              className={`border px-2 py-1 rounded text-xs transition cursor-pointer
                ${filters.tags?.includes(tag) ? "bg-black text-white" : "hover:bg-gray-100"}
              `}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
