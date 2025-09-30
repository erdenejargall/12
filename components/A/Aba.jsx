import React, { useEffect, useState } from "react";

export default function Aba() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/bb.json");
        const json = await res.json();
        setItems(json);
      } catch (e) {
        console.error(e);
      }
    }
    load();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">New Products</h1>
        <div className="hidden sm:flex gap-4 items-center">
          <input
            aria-label="search"
            className="px-3 py-2 border rounded-md text-sm w-56"
            placeholder="Search"
          />
          <button className="px-4 py-2 bg-black text-white rounded-md text-sm">
            Filter
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={item.id ?? index}
            className="group bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <div className="relative h-56 bg-gray-50 flex items-center justify-center">
              <img
                src={item.img}
                alt={item.name}
                className="object-contain h-full w-full"
              />
              <span className="absolute top-3 left-3 bg-white/90 rounded-full p-1">
                <img
                  src={item.brand_img}
                  alt="brand"
                  className="h-6 w-6 object-contain"
                />
              </span>
            </div>

            <div className="p-4 flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h2 className="text-sm font-medium line-clamp-2">{item.name}</h2>
                <span className="text-sm font-semibold">{item.price}</span>
              </div>

              <p className="text-xs text-gray-500">{item.description}</p>

              <div className="mt-3 flex items-center justify-between">
                <button className="px-3 py-2 border rounded-md text-xs w-full mr-2">
                  Description
                </button>
                <button className="px-3 py-2 bg-black text-white rounded-md text-xs">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
