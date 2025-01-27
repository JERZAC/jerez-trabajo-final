import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Welcome to React Mod7</h1>
    <p className="text-gray-700">This is the landing page of the application.</p>
    <Link to="/login" className="text-blue-500 underline">
      Go to Login
    </Link>
  </div>
);

export default LandingPage;
