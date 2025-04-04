"use client";
import React, { useState, useEffect } from "react";
import { getMedias } from "../../routes/media"; 

export default function GalleryGrid() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await getMedias(); 
        const filteredImages = response.filter((image) => image.description === "gallery");
        setImages(filteredImages);
      } catch (err) {
        console.error("Error fetching gallery images:", err);
        setError("Failed to load images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
   

  }, []);

  if (loading) return <p className="text-center text-gray-500 text-lg">Loading gallery...</p>;
  if (error) return <p className="text-center text-red-500 text-lg">{error}</p>;

  return (
    <div className="container mx-auto p-10 lg:p-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={image.id || index} className="relative w-full h-64 rounded-lg overflow-hidden group">
            {/* Image */}
            <img
              src={image.media_path}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
