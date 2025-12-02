import { createBrowserRouter } from "react-router";

import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import DetailsCard from "../components/DetailsCard/DetailsCard";
import ExtraSections from "../pages/ExtraSections/ExtraSections";
import Register from "../pages/Register/Register";
import Login from "../pages/Lgoin/Login";
import PrivetProvider from "../provider/PrivetProvider";
import ForgotPass from "../pages/ForgotPass/ForgotPass";
import About from "../components/About/About";
import Loading from "../components/Loading/Loading";
import MyProfile from "../pages/MyProfile/MyProfile";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import ViewAllSection from "../pages/ViewAllSection/ViewAllSection";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Contact from "../pages/Contact/Contact";
import Support from "../pages/Support/Support ";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, Component: Home },
      {
        path: "/detailscard/:id",

        element: <DetailsCard></DetailsCard>,

        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/",
        Component: ExtraSections,
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/auth/forgot-password",
        Component: ForgotPass,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/all-course",
        Component: ViewAllSection,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/support",
        Component: Support,
      },

      {
        path: "/profile",

        element: (
          <PrivetProvider>
            <MyProfile></MyProfile>
          </PrivetProvider>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivetProvider>
            <UpdateProfile></UpdateProfile>
          </PrivetProvider>
        ),
      },
    ],
  },
]);

export default router;
