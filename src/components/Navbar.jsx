import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearForm } from "../store/formSlice";

const Navbar = () => {
  const { username, email } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearForm());
    alert("Logout successful!");
  };

  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between items-center">
      <div>
        <p>Username: {username || "Guest"}</p>
        <p>Email: {email || "Not logged in"}</p>
      </div>
      <button className="bg-red-500 px-4 py-2 rounded" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
