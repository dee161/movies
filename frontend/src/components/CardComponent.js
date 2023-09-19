import React, { useEffect, useState } from "react";
import axios from "axios";

function CardComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:4000/user");

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((user) => (
        <div
          key={user.id}
          className="bg-white rounded overflow-hidden shadow-lg"
        >
          <div className="relative w-full h-64">
            <img
              src={user.image}
              alt={user.content}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{user.time}</div>
            <p className="text-gray-700 text-base">{user.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CardComponent;
