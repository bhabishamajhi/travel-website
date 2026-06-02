import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="bg-[#f8f5f0] min-h-screen">
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            My Profile
          </h1>

          <p className="text-gray-300">
            Manage your account and personal information.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-10">
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-yellow-500 flex items-center justify-center text-4xl font-bold text-white">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>

            <h2 className="text-3xl font-bold mt-4">
              {user?.name || "Guest User"}
            </h2>

            <p className="text-gray-500 mt-2">
              {user?.email || "No Email"}
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="border rounded-xl p-5">
              <h3 className="font-semibold mb-2">
                Full Name
              </h3>

              <p className="text-gray-600">
                {user?.name || "Not Available"}
              </p>
            </div>

            <div className="border rounded-xl p-5">
              <h3 className="font-semibold mb-2">
                Email Address
              </h3>

              <p className="text-gray-600">
                {user?.email || "Not Available"}
              </p>
            </div>

            <div className="border rounded-xl p-5">
              <h3 className="font-semibold mb-2">
                Role
              </h3>

              <p className="text-gray-600">
                {user?.role || "Customer"}
              </p>
            </div>

            <div className="border rounded-xl p-5">
              <h3 className="font-semibold mb-2">
                Account Status
              </h3>

              <p className="text-green-600 font-medium">
                Active
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-4">
            <button
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-medium"
            >
              Edit Profile
            </button>

            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Logout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;