import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { FaHome, FaUserCircle, FaInfoCircle } from "react-icons/fa";
import Logo from "../../assets/Logo.png";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("🎉 Logged out successfully!");
      })
      .catch((error) => {
        // console.error(error);
      });
  };

  const navItemStyle = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
      isActive
        ? "text-[#137A63] bg-[#E6F4F1] shadow-sm"
        : "text-slate-700 hover:text-[#137A63] hover:bg-slate-100"
    }`;

  const links = (
    <>
      <NavLink to="/" className={navItemStyle}>
        <FaHome className="text-base" />
        Home
      </NavLink>
      <NavLink to="/profile" className={navItemStyle}>
        <FaUserCircle className="text-base" />
        My Profile
      </NavLink>
      <NavLink to="/about" className={navItemStyle}>
        <FaInfoCircle className="text-base" />
        About
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="navbar-start">
    
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-slate-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

     
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-xl mt-3 w-48 p-2 shadow-md space-y-1"
          >
            {links}

       
            {user ? (
              <button
                onClick={handleLogOut}
                className="btn bg-[#137A63] hover:bg-[#0f5e4c] text-white border-none rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full"
              >
                Log Out
              </button>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="btn bg-[#137A63] hover:bg-[#0f5e4c] text-white border-none rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="btn bg-white text-[#137A63] border border-[#137A63] hover:bg-[#E6F4F1] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full"
                >
                  Sign Up
                </Link>
              </>
            )}
          </ul>
        </div>

   
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl flex items-center gap-2"
        >
          <img className="h-9 w-9" src={Logo} alt="SkillSwap logo" />
          <span className="font-semibold text-[#137A63] tracking-tight">
            SkillSwap
          </span>
        </Link>
      </div>

 
      <div className="navbar-center hidden lg:flex">
        <div className="flex space-x-3">{links}</div>
      </div>

      <div className="navbar-end flex items-center gap-3">
    
        {user ? (
          user.photoURL ? (
            <img
              src={user.photoURL}
              alt="User"
              title={user.displayName}
              className="w-9 h-9 rounded-full border-2 border-[#137A63]"
            />
          ) : (
            <FaUserCircle className="text-3xl text-[#137A63]" />
          )
        ) : (
          <FaUserCircle className="text-3xl text-[#137A63]" />
        )}


        {!user && (
          <div className="hidden lg:flex gap-2">
            <Link
              to="/auth/login"
              className="btn bg-[#137A63] hover:bg-[#0f5e4c] text-white border-none rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Login
            </Link>

            <Link
              to="/auth/register"
              className="btn bg-white text-[#137A63] border border-[#137A63] hover:bg-[#E6F4F1] rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>
        )}

    
        {user && (
          <button
            onClick={handleLogOut}
            className="hidden lg:block btn bg-[#137A63] hover:bg-[#0f5e4c] text-white border-none rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
