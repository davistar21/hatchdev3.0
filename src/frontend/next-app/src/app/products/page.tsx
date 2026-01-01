"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Product, { ProductProps } from "@/app/components/product";
import axios from "axios";
export default function Home() {
  const [products, setProducts] = useState<null | ProductProps[]>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://api.mockrest.com/products");
        if (!res.data) return;

        setProducts(res.data.slice(0, 6));
      } catch (err) {
        console.error("Failed to get products", err);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="font-sans grid grid-cols-1 md:grid-cols-3 gap-16 p-12">
      {loading && <div className="loader"></div>}
      {products &&
        products.map((product) => <Product {...product} key={product.id} />)}
    </div>
  );
}
