import { Link, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-10">
        Unwind Admin
      </h1>

      <nav className="flex flex-col gap-4">
        <Link
          to="/admin/dashboard"
          className="hover:bg-slate-700 p-3 rounded"
        >
          Dashboard
        </Link>

       <Link
         to="/admin/manage"
         className="hover:bg-slate-700 p-3 rounded"
        >
          Manage Cabins
       </Link>

        <Link
         to="/admin/add"
         className="hover:bg-slate-700 p-3 rounded"
        >
          Add Cabin
        </Link>

        <Link
          to="/admin/reservations"
          className="hover:bg-slate-700 p-3 rounded"
        >
          Reservations
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-500 mt-8 p-3 rounded"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default AdminSidebar;