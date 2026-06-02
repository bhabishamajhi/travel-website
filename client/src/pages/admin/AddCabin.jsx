import AdminSidebar from "../../components/AdminSidebar";

const AddCabin = () => {
  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">
          Add New Cabin
        </h1>

        <form className="bg-white p-6 rounded-xl shadow max-w-xl">
          <input
            type="text"
            placeholder="Title"
            className="border p-3 w-full mb-4"
          />

          <input
            type="text"
            placeholder="Location"
            className="border p-3 w-full mb-4"
          />

          <input
            type="number"
            placeholder="Price"
            className="border p-3 w-full mb-4"
          />

          <button className="bg-green-600 text-white px-6 py-3 rounded">
            Add Cabin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCabin;