import React, { useEffect, useState } from "react";

type Item = {
  id: string;
  name: string;
  data: any;
};

export default function Page() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/c.json");
        const json: Item[] = await res.json();
        setItems(json);
      } catch (e) {
        console.error(e);
      }
    }
    load();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 p-2 bg-white">
      {items.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg p-4"
        >
          <p className="font-semibold text-lg mb-2">{item.name}</p>
          {item.data ? (
            <div className="text-sm text-gray-700">
              {Object.entries(item.data).map(([key, value]) => (
                <p key={key}>
                  <span className="font-medium">{key}:</span> {String(value)}
                </p>
              ))}
            </div>
          ):(<p></p>)}
        </div>
      ))}
    </div>
  );
}
