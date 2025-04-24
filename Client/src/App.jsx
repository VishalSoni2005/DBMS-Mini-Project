/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./component/UserList";
import ParticlesBackground from "./component/ParticlesBackground";
import Hero from "./pages/Hero";
import Header from "./component/Header";
import { Route, Routes } from "react-router";
import Contact from './pages/Contact';
import AuthForm from "./component/AuthForm";
import GetMemberships from './component/GetMemberships';
import Attendance from './component/Attendance';
import { Toaster } from 'sonner';


function App() {


  return (
    <>
    <Toaster 
    position="top-right" 
    richColors
    toastOptions={{
      className: 'bg-gray-800 text-white',
      style: {
        background: '#1f2937',
        color: '#fff',
      },
    }}
    />
      <Header />
      {/* <ParticlesBackground className="fixed inset-0 z-[-1]" /> */}
      <Routes>
        <Route
          path="/"
          element={<Hero />}
        />
        <Route
          path="/register"
          element={<AuthForm />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/users"
          element={<UserList />}
        />
        <Route
          path="/memberships"
          element={<GetMemberships />}
        />
        <Route
          path="/attendance"
          element={<Attendance />}
        />
      </Routes>
    </>
  );
}

export default App;
