import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AddExpense from "./compoenents/AddExpense.jsx";
import SingleExpense from "./compoenents/SingleExpense.jsx";
import { Expensestore } from "./Store/Expensestore.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/add", element: <AddExpense /> },
      { path: "/SingleExpense/:id", element: <SingleExpense /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Expensestore>
      <RouterProvider router={routes}>
        <App />
        {/* <RouterProvider router={routes} /> */}
      </RouterProvider>
    </Expensestore>
  </React.StrictMode>
);
