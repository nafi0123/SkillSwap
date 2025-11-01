import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        {/* Profile Image */}
        <div className="mb-6">
          <img
            src={user?.photoURL || "https://via.placeholder.com/120"}
            alt="Profile"
            className="w-28 h-28 rounded-full mx-auto object-cover shadow-md"
          />
        </div>

        {/* Name */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {user?.displayName || "Your Name"}
        </h2>

        {/* Email */}
        <p className="text-gray-600 mb-6">{user?.email }</p>

        {/* Update Profile Button */}
        <button
          onClick={() => navigate("/update-profile")}
          className="btn bg-[#137A63] hover:bg-[#0f5e4c] text-white border-none rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
