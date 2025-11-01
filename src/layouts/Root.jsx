import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  const { state } = useNavigation;
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto py-5">
        {state == "loading" ? <Loading /> : <Outlet></Outlet>}
        <Toaster position="top-right" reverseOrder={false} />
      </main>
      <footer className="py-4">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
