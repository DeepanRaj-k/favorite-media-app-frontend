import { useState } from 'react';
import axios from 'axios';

export default function MediaForm({ refreshList }: { refreshList: () => void }) {
  const [form, setForm] = useState({
    title: '',
    type: 'Movie',
    director: '',
    budget: '',
    location: '',
    duration: '',
    yearTime: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/media', form);
    setForm({ title: '', type: 'Movie', director: '', budget: '', location: '', duration: '', yearTime: '' });
    refreshList();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4 grid grid-cols-2 gap-4">
      <input name="title" value={form.title} onChange={handleChange} className="border p-2" placeholder="Title" required />
      <select name="type" value={form.type} onChange={handleChange} className="border p-2">
        <option value="Movie">Movie</option>
        <option value="TV Show">TV Show</option>
      </select>
      <input name="director" value={form.director} onChange={handleChange} className="border p-2" placeholder="Director" />
      <input name="budget" value={form.budget} onChange={handleChange} className="border p-2" placeholder="Budget" />
      <input name="location" value={form.location} onChange={handleChange} className="border p-2" placeholder="Location" />
      <input name="duration" value={form.duration} onChange={handleChange} className="border p-2" placeholder="Duration" />
      <input name="yearTime" value={form.yearTime} onChange={handleChange} className="border p-2" placeholder="Year/Time" />
      <button type="submit" className="col-span-2 bg-blue-500 text-white py-2 rounded">Add</button>
    </form>
  );
}
