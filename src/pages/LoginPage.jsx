import React from "react";
import FormLogin from "../components/FormLogin";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Login Page</h1>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <FormLogin />
      </div>
    </div>
  );
};

export default LoginPage;
