import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  // const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        toast.success("🎉 Login successfully!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        console.error("Login error:", err);
        setError(err.code || err.message || "Login failed");
        toast.error(err.message || "Login failed");
      });
  };

  const handleGoogleSignIn = () => {
    setError("");
    if (!googleSignIn) {
      toast.error("Google Sign-In not configured.");
      return;
    }

    googleSignIn()
      .then(() => {
        toast.success("🎉 Logged in with Google!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        // console.error("Google Sign-In error:", err);
        setError(err.code || err.message || "Google Sign-In failed");
        toast.error(err.message || "Google Sign-In failed");
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center text-[#137A63] tracking-tight">
          Login your account
        </h2>

        <form className="card-body" onSubmit={handleLogin}>
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input pr-10"
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="absolute right-5 top-5 -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash size={19} /> : <FaEye size={19} />}
              </button>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end mt-2 mb-2 ">
              {/*  onClick={() => navigate("/forgot-password", { state: { email } })} */}

              <Link
                to="/auth/forgot-password"
                state={{ email }}
                className="text-sm text-green-700 hover:underline cursor-pointer"
              >
                Forgot password?
              </Link>
            </div>

            {/* Error */}
            {error && <p className="text-red-400 text-xs mb-2">{error}</p>}

            {/* Login Button */}
            <button
              type="submit"
              className="btn bg-[#137A63] hover:bg-[#0f5e4c] text-white mt-2 border-none shadow-md hover:shadow-lg transition-all duration-300 w-full"
            >
              Login
            </button>

            {/* Google Sign-In */}
            <button
              className="btn bg-white text-black border border-[#e5e5e5] flex items-center gap-2 hover:bg-gray-100 hover:text-black transition-all duration-300 mt-3 w-full justify-center"
              onClick={handleGoogleSignIn}
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            {/* Register Link */}
            <p className="font-semibold text-center pt-5">
              Don’t have an account?{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
