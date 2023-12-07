import React from "react";
import * as ReactDOM from "react-dom/client";
import "./dist/css/main.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
);

reportWebVitals();

// import React from "react";
// import * as ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import './index.css';
// import "./dist/css/main.css";
// import reportWebVitals from "./reportWebVitals";
// import DashBoard from "./pages/Dashboard";
// import ErrorPage from "./pages/ErrorPage";
// import DoorPage from "./pages/DoorPage";
// import Login from "./pages/Login";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/dashboard",
//     element: <DashBoard />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/door",
//     element: <DoorPage />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
