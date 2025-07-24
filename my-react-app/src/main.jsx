import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx"; 
import ErrorPage from "./pages/ErrorPage.jsx";
import PageLocation from "./pages/PageLocation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/AboutPage", 
        element: <AboutPage />,
      },
      {
        path: "/PageLocation/:id",
        element: <PageLocation />, 
      },
      {
        path: "*",
        element: <ErrorPage />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
