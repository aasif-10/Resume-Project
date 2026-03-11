import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/login";
import Register from "./features/auth/pages/register";
import Protected from "./features/auth/components/protected";
import Upload from "./features/resumeAnalyse/pages/Upload";

import React from "react";

export const router = createBrowserRouter([
  {
    path: "/upload",
    element: (
      <Protected>
        <Upload />
      </Protected>
    ),
  },
  { path: "/auth/login", element: <Login></Login> },
  { path: "/auth/register", element: <Register></Register> },
]);
