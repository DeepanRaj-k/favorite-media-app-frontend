import React from "react";
import type { MediaItem } from "../types";

interface Props {
  mediaList: MediaItem[];
}

const MediaTable: React.FC<Props> = ({ mediaList }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Director</th>
            <th className="px-4 py-2 text-left">Budget</th>
            <th className="px-4 py-2 text-left">Location</th>
            <th className="px-4 py-2 text-left">Duration</th>
            <th className="px-4 py-2 text-left">Year</th>
            <th className="px-4 py-2 text-left">Created</th>
            <th className="px-4 py-2 text-left">Updated</th>
          </tr>
        </thead>
        <tbody>
          {mediaList.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{item.id}</td>
              <td className="px-4 py-2">{item.title}</td>
              <td className="px-4 py-2">{item.type}</td>
              <td className="px-4 py-2">{item.director}</td>
              <td className="px-4 py-2">{item.budget}</td>
              <td className="px-4 py-2">{item.location}</td>
              <td className="px-4 py-2">{item.duration}</td>
              <td className="px-4 py-2">{item.yearTime}</td>
              <td className="px-4 py-2">
                {new Date(item.createdAt).toLocaleString()}
              </td>
              <td className="px-4 py-2">
                {new Date(item.updatedAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MediaTable;
