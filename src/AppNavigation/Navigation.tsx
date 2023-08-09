import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddNotes } from "../pages/NoNotes/AddNotes";
import { CreateNotes } from "../pages/NoNotes/CreateNotes";
import { Login } from "../pages/Auth/Login";
import { Signup } from "../pages/Auth/Signup";
import "../style.css";

interface AppNavigatorProps {}

export const AppNavigator = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/notes" element={<AddNotes />} />
          <Route path="/notes/create" element={<CreateNotes />} />
          <Route path="/notes/create/:id" element={<CreateNotes />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};
