import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const ForgotPass = () => {
  const { resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      toast.success("Please enter your email.", {
        position: "top-center",
      });
      return;
    }

    setLoading(true);

    resetPassword(email)
      .then(() => {
        toast.success("✅ Password reset email sent! Check your inbox.");
        window.open("https://mail.google.com", "_blank");
      })
      .catch((err) => {
        // console.error("Reset error:", err);

        if (err.code === "auth/invalid-email") {
          toast.error("❌ Invalid email address. Please check again.");
        } else if (err.code === "auth/user-not-found") {
          toast.error("⚠️ No user found with this email.");
        } else {
          toast.error(err.message || "Something went wrong.");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Reset Your Password
        </h2>
        {/*   */}

        <form className="space-y-5" onSubmit={handleResetPassword}>
          {/* Email Field */}
          <div>
            <label className="block text-gray-600 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-800"
              placeholder="Enter your email"
            />
          </div>

          {/* Reset Button */}
          <button
            type="submit"
            className="btn bg-[#137A63] hover:bg-[#0f5e4c] text-white mt-2 border-none shadow-md hover:shadow-lg transition-all duration-300 w-full"
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>

          {/* Go Back Link */}
          <p
            //
            // font-semibold text-2xl text-center text-[#137A63] tracking-tight
            className="text-center  hover:underline cursor-pointer text-[#137A63] tracking-tight"
            onClick={() => navigate("/auth/login")}
          >
            Back to Login
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
