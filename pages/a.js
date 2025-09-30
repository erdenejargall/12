import { useState, useEffect } from "react";

export default function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.restful-api.dev/objects");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <div className="mb-6 ml-6"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-6">
        {data.length > 0 && data.map((item) => (
          <div
            key={item.id}
            className="border-2 rounded-md shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <div className="p-4">
              <p className="font-bold text-center text-sm mb-2">{item.name}</p>
              <p className="text-xs text-gray-600 mb-2">{item.data?.color}</p>
              <p className="text-xs text-gray-500">{item.data?.capacity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}