import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import "./App.css";
import { Navigation } from "./components/navigation";
import Home from "./pages/Home";
import FindService from "./pages/FindService/FindService";
import 'leaflet/dist/leaflet.css';


const Layout = () => {
  return (
    <div className="layout">
      <Navigation />
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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
