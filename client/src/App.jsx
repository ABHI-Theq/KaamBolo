import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import FindService from "./pages/FindService/FindService";
import 'leaflet/dist/leaflet.css';
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Nav from './components/Nav'
import PostAJob from "./pages/PostAJob";
import WorkerDetail from "./pages/WorkerDetail";

import About from "./components/about";
import { Rating } from "@mui/material";
import OnlineUsers from "./components/OnlineUsers";
import useAuthContext from "./context/AuthContext";
// const {authUser} =AuthContext()
const Layout = () => {
  return (
    <div className="layout">
      <Nav />
      <Outlet />
    </div>
  );
  
};

const Approutes =()=>{ 
  const {authUser}=useAuthContext()
  return (createBrowserRouter([
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
      {
        path: "/post-job",
        element: <PostAJob />,
      },
      {
        path:'/about',
        element:<About/> 
      },
      {
        path: "/worker-detail/:id",
        element: <WorkerDetail />,
      },{
                path:'/about',
        element:<About/> 
      },
    ],
  },
  {
    path:"/signup",
    element:authUser ? <Navigate to="/" /> : <Signup />
  },
  {
    path:"/login",
    element:authUser ? <Navigate to="/" /> : <Login />
  },{
    path:"/rate",
    element:<Rating/>
  },
  {
    path:'/getUsers',
    element:<OnlineUsers/>
  }
]))};

function App() {
  return (
    <>
      <RouterProvider router={Approutes()} />
    </>
  );
}

export default App;
