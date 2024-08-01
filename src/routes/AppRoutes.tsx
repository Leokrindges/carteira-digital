import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Bora codar</h1>,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
