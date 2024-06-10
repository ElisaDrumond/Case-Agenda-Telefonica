import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home name={"John Doe"} />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    //inserir nested aq
  }
]);

export function App() {
  return <RouterProvider router={router} />;
}
