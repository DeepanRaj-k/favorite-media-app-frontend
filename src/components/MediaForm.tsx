import React, { useState } from "react";
import axios from "axios";

interface Props {
  onAdd: () => void;
}

const MediaForm: React.FC<Props> = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    director: "",
    budget: "",
    location: "",
    duration: "",
    yearTime: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/media", formData);
      setFormData({
        title: "",
        type: "",
        director: "",
        budget: "",
        location: "",
        duration: "",
        yearTime: ""
      });
      onAdd();
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl p-6 rounded-xl grid gap-4 md:grid-cols-2"
    >
      {/* Title */}
      <input
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
      />

      {/* Type Dropdown */}
      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
      >
        <option value="">Select Type</option>
        <option value="Movies">Movies</option>
        <option value="Web Series">Web Series</option>
      </select>

      {/* Director */}
      <input
        name="director"
        placeholder="Director"
        value={formData.director}
        onChange={handleChange}
        className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
      />

      {/* Budget */}
      <input
        name="budget"
        placeholder="Budget"
        value={formData.budget}
        onChange={handleChange}
        className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
      />

      {/* Location */}
      <input
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
      />

      {/* Duration */}
      <input
        name="duration"
        placeholder="Duration"
        value={formData.duration}
        onChange={handleChange}
        className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
      />

      {/* Year */}
      <input
        name="yearTime"
        placeholder="Year"
        value={formData.yearTime}
        onChange={handleChange}
        className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
      />

      <button
        type="submit"
        className="md:col-span-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition"
      >
        ➕ Add Media
      </button>
    </form>
  );
};

export default MediaForm;
