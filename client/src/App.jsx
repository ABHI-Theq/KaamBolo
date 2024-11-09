import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import FindService from "./pages/FindService/FindService";
import 'leaflet/dist/leaflet.css';
import Signup from "./pages/SignUp";
import Nav from "./components/Nav";


const Layout = () => {
  return (
    <div className="layout">
      <Nav />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/find-a-service/:service",
        element: <FindService />,
      },
    ],
  },
  {
    path:"/signup",
    element:<Signup/>
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
