import React, { useState } from "react";
const Root = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // You can add your login logic here
    console.log("Logging in with:", username, password);
  };

  // const handleForgotPassword = () => {
  //   // Implement your forgot password logic here
  //   console.log("Forgot Password clicked");
  // };
  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-center items-center ">
      <div className="p-8 bg-gray-200 rounded space-y-4 flex flex-col items-center ">
        <h1 className="font-bold text-[#d40032] text-4xl mb-4">QESTIT</h1>
        <div className="flex flex-col space-y-1">
          <label htmlFor="username" className="font-medium">
            Username
          </label>
          <input
            className="p-1 rounded"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            className="p-1 rounded"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleLogin}
          className="bg-green-500 rounded w-full py-2 font-medium text-white hover:bg-green-600 active:bg-green-500/70 mt-2"
        >
          Login
        </button>
        {/* <button style={styles.button} onClick={handleForgotPassword}>
          Forgot Password
        </button> */}
      </div>
    </div>
  );
};

export default Root;
