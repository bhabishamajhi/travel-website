import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../../components/AdminSidebar";

const ManageCabins = () => {
  const [cabins, setCabins] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCabins = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/api/cabins`
        );

        setCabins(res.data);
      } catch (error) {
        console.error(
          "Error fetching cabins:",
          error
        );
      }
    };

    fetchCabins();
  }, [API_URL]);

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">
          Manage Cabins
        </h1>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">Title</th>
              <th className="p-3">Location</th>
              <th className="p-3">Price</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {cabins.map((cabin) => (
              <tr key={cabin._id}>
                <td className="p-3">
                  {cabin.title}
                </td>

                <td className="p-3">
                  {cabin.location}
                </td>

                <td className="p-3">
                  £{cabin.price}
                </td>

                <td className="p-3">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                    Edit
                  </button>

                  <button className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCabins;