import React, { Children, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./components/header";
import Body from "./components/body";
import Error from "./components/error";
import Footer from "./components/footer";
import About from "./components/about";
import RestaurantMenu from "./components/Resturantmenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Profile from "./components/Profile";

const About = lazy(() => import("./components/About"));

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",

        element: (
          <Suspense>
            {" "}
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/resturant/:bd",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
