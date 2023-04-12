import logo from "./logo.svg";
import "./App.css";
import { useContext, useEffect } from "react";
import AuthContext from "./context/AuthContext";

import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./compo/navbar/Navbar";
import NotFound from "./compo/notFound/notfound";
import Home from "./compo/home/Home";
import PRODUCTS from "./db.json";
import Details from "./compo/details/Details";
import Add from "./compo/add/Add";
function App() {
  const navigate = useNavigate();
  // navigate("/news");
  useEffect(() => {
    console.log(PRODUCTS);
  }, []);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/home/:id" element={<Details />} />
        <Route path="/add" element={<Add />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
