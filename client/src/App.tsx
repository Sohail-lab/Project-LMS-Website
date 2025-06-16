import Navbar from "./components/navbar";
import { Button } from "./components/ui/button";
import React from "react";
import Hero from "./components/hero";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Projects from "./pages/projects";
import Home from "./pages/home";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import Footer from "./components/footer";
import Profile from "./pages/profile";
import Admin from "./pages/admin/admin";
import Dashboard from "./pages/admin/Dashboard";
import ProjectsDashboard from "./pages/admin/ProjectsDashboard";

const router = createBrowserRouter([
  {
    path:"/",
    element: <><Navbar /><Home /></>
  },
  {
    path: "/projects",
    element: <><Navbar /><Projects/></>
  },
  {
    path: "/login",
    element: <><Navbar /><Login /></>
  },
  {
    path: "/signup",
    element: <><Navbar /><Signup /></>
  },
  {
    path: "/profile",
    element: <><Navbar /><Profile /></>
  },
  {
    path: "/admin",
    element: <><Navbar /><Admin /></>,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "projects",
        element: <ProjectsDashboard />
      }
    ]
  }
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    <Footer />
    </>
  );
}

export default App
