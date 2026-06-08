import AdminSidebar from "../../components/AdminSidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-10 bg-gray-100">
        <h1 className="text-3xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">
              Total Cabins
            </h2>
            <p className="text-3xl font-bold mt-3">
              3
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">
              Total Bookings
            </h2>
            <p className="text-3xl font-bold mt-3">
              1
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">
              Total Users
            </h2>
            <p className="text-3xl font-bold mt-3">
              1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;