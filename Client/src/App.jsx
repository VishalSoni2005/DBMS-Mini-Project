/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./component/UserList";
import ParticlesBackground from "./component/ParticlesBackground";
import Hero from "./pages/Hero";
import Header from "./component/Header";
import { Route, Routes } from "react-router";
import Contact from './pages/Contact';

function App() {
  // const [users, setUsers] = useState([]);

  // const getAllUsers = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/users");
  //     setUsers(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <Header />
      {/* <ParticlesBackground className="fixed inset-0 z-[-1]" /> */}
      {/* <Hero className="absolute " /> */}

      <Routes>
        <Route
          path="/"
          element={<Hero />}
        />
        <Route
          path="/register"
          // element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </>
  );
}

export default App;
