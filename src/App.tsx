import React, { useEffect, useState } from "react";
import axios from "axios";
import MediaForm from "./components/MediaForm";
import MediaTable from "./components/MediaTable";
import type { MediaItem } from "./types";

// ✅ Use environment variable for API base URL
const baseUrl = import.meta.env.VITE_API_URL;

const App = () => {
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);

  const fetchMedia = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/media`);
      setMediaList(response.data);
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-200 p-6 font-sans">
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-8 drop-shadow-md">
        🎬 Favorite Media Library
      </h1>
      <div className="w-full grid gap-10">
        <MediaForm onAdd={fetchMedia} />
        <MediaTable mediaList={mediaList} />
      </div>
    </div>
  );
};

export default App;
