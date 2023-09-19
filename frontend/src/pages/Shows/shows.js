import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
function Shows() {
  const [data, setData] = useState([]);
  const [newMovie, setNewMovie] = useState({ name: "", description: "" });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/movie");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (movieId) => {
    try {
      await axios.delete(`http://localhost:4000/moviedelete/${movieId}`);
      fetchData();
      alert("movies Deleted"); 
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  const handleInsert = async () => {
    try {
      await axios.post("http://localhost:4000/movie", newMovie);
      setNewMovie({ name: "", description: "" }); 
      fetchData(); 
    } catch (error) {
      console.error("Error inserting movie:", error);
    }
  };
  return (
    <>
    <Navbar/><br></br>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((movie) => (
        <div
          key={movie.id}
          className="bg-white rounded overflow-hidden shadow-lg"
        >
          <div className="relative w-full h-64">
            <img
              src={movie.image}
              alt={movie.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-6 py-4">
            <p className="font-bold text-xl mb-2">{movie.name}</p>
            <div className="text-gray-700 text-base">{movie.description}</div>
            <div className="mt-4 flex justify-between items-center">
              <Link href="/insertmovies">
              <button
                onClick={ () => handleInsert(movie.id)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                Insert
              </button>
              </Link>
              <button
                onClick={() => handleDelete(movie.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
}
export default Shows;
