"use client";

import { useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ProductListPage() {
  const token = Cookies.get("token");

  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    price: null,
    size: null,
    color: null,
    brand: null,
    collection: null,
    tags: [],
  });

  useEffect(() => {
    fetch(`${BACKEND_URL}/products`, {
      headers: { authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data.data || []));
  }, [token]);
  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.price) result = result.filter((p) => p.price <= filters.price);

    if (filters.size)
      result = result.filter((p) => p.sizes.includes(filters.size));

    if (filters.color)
      result = result.filter((p) => p.color.includes(filters.color));

    if(filters.brand)
      result = result.filter((p) => p.brand?.includes(filters.brand));
    return result;
  }, [products, filters]);

  return (
    <div className="flex gap-8 py-8 w-full">
      <aside className="block sm:w-64 w-32">
        <Sidebar filters={filters} setFilters={setFilters} />
      </aside>

      <main className="flex-1">
        <ProductGrid products={filteredProducts} />
      </main>
    </div>
  );
}
