import { useNavigate, Link } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <div className="p-10 text-center bg-black text-white">
        <h1 className="text-4xl font-bold">My Profile</h1>
      </div>

      <div className="max-w-3xl mx-auto p-8 bg-white mt-10 rounded-xl shadow">
        <h2 className="text-2xl font-bold">
          {user?.name || "Guest User"}
        </h2>

        <p className="text-gray-600">{user?.email || "No Email"}</p>

        <div className="mt-6 flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 bg-yellow-500 rounded"
          >
            Login
          </Link>

          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;