import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFormData } from "../store/formSlice";

const FormLogin = () => {
  const [formData, setLocalFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (password === "mod7USIP-TUNOMBRE") {
      dispatch(setFormData({ username, email, password }));
      alert("Datos guardados con éxito");
    } else {
      alert("Contraseña incorrecta");
    }
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <div>
        <label>Module:</label>
        <input type="text" value="React Mod7" disabled className="border p-2" />
      </div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="border p-2"
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2"
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <div className="flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2"
            required
          />
          <button
            type="button"
            className="ml-2 bg-gray-200 p-1"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>
      <button type="submit" className="bg-green-500 px-4 py-2 mt-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default FormLogin;
