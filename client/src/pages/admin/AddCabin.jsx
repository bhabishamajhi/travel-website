import { useState } from "react";
import axios from "axios";
import AdminSidebar from "../../components/AdminSidebar";

const AddCabin = () => {
  const [formData, setFormData] = useState({
  title: "",
  location: "",
  price: "",
  image: "",
  description: ""
});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/cabins`,
      formData
    );

    alert("Cabin added successfully!");

    setFormData({
      title: "",
      location: "",
      price: "",
      image: "",
      description: ""
    });

  } catch (error) {
    console.log("FULL ERROR:", error.response?.data);
    alert("Failed to add cabin");
  }
};

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">
          Add New Cabin
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow max-w-xl"
        >
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="border p-3 w-full mb-4"
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="border p-3 w-full mb-4"
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="border p-3 w-full mb-4"
          />

          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="border p-3 w-full mb-4"
          />

          <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-3 w-full mb-4"
         />

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded"
          >
            Add Cabin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCabin;