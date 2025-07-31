import { useEffect, useState } from 'react';
import axios from 'axios';

type MediaItem = {
  id: number;
  title: string;
  type: string;
  director: string;
  budget: string;
  location: string;
  duration: string;
  yearTime: string;
};

export default function MediaTable({ reload }: { reload: boolean }) {
  const [data, setData] = useState<MediaItem[]>([]);

  const fetchData = async () => {
    const res = await axios.get('http://localhost:3000/api/media?page=1&size=100');
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [reload]);

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure to delete?')) {
      await axios.delete(`http://localhost:3000/api/media/${id}`);
      fetchData();
    }
  };

  return (
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-100">
          <th>Title</th><th>Type</th><th>Director</th><th>Budget</th><th>Location</th><th>Duration</th><th>Year/Time</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id} className="text-center border-t">
            <td>{item.title}</td>
            <td>{item.type}</td>
            <td>{item.director}</td>
            <td>{item.budget}</td>
            <td>{item.location}</td>
            <td>{item.duration}</td>
            <td>{item.yearTime}</td>
            <td>
              <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
