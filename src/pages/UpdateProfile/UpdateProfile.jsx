import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const { updateUser, setUser, user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

  

    setUser((prev) => ({ ...prev, displayName: name, photoURL: photoURL }));

      setLoading(true);

    updateUser({ displayName: name, photoURL: photoURL })
      .then(() => {
        form.name.value = name;
        form.photoURL.value = photoURL;

        toast.success("Profile updated successfully!");
        navigate(-1);

        setLoading(false);
      })
      .catch((error) => {
   
        toast.error("Failed to update profile. Try again!");
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      {/* Toast Container */}
      <Toaster />

      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Update Profile
        </h2>

        <form className="space-y-5" onSubmit={handleUpdate}>
          {/* Name */}
          <div>
            <label className="block text-gray-600 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-gray-600 mb-2" htmlFor="photoURL">
              Profile Image URL
            </label>
            <input
              type="text"
              id="photoURL"
              name="photoURL"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter image URL"
            />
          </div>

          {/* Update Button */}
          <button
            type="submit"
            disabled={loading}
            className={`btn bg-[#137A63] hover:bg-[#0f5e4c] text-white border-none rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>

          {/* Back Button */}
          <p
            onClick={() => navigate("/profile")}
            className="text-center mt-3 text-green-700 hover:underline cursor-pointer"
          >
            Back to Profile
          </p>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
