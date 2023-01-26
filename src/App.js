import React from "react";
import { Home, About, Contact } from "./pages/block";
import { Routes, Route } from "react-router-dom";
import UseData from "./pages/about/pages/use-data";
import Mens from "./pages/about/pages/mens";
import Women from "./pages/about/pages/women";
import Jewelery from "./pages/about/pages/jewelery";
import Electronic from "./pages/about/pages/electronics";
import User from "./pages/user/user";
import Layout from "./layout/layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route index element={<UseData />} />
            <Route path="women" element={<Women />} />
            <Route path="mens" element={<Mens />} />
            <Route path="jewelery" element={<Jewelery />} />
            <Route path="electronic" element={<Electronic />} />
            <Route path="user/:id" element={<User />} />
            <Route path="*" element={<h2>Page note Founds</h2>} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<h2>Page note Founds</h2>} />
      </Routes>
    </div>
  );
};

export default App;
