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
