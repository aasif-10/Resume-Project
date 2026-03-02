import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/login";
import Register from "./features/auth/pages/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home - Navigate to /auth/login or /auth/register</div>,
  },
  { path: "/auth/login", element: <Login /> },
  { path: "/auth/register", element: <Register /> },
]);
