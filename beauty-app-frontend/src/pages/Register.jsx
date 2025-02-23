import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("customer");
  const [notification, setNotification] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(import.meta.env.REGISTER_URL)
    try {
      const response = await axios.post("https://beauticianproject-api.onrender.com/api/auth/register", {
        name,
        email,
        password,
        userType,
      });
      setNotification("Registration successful! 🎉",Navigate("/home"));
      console.log("Registration successful:", response.data);
    } catch (error) {
      setNotification("Registration failed. Please try again.");
      console.error("Registration failed:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?makeup,beauty')" }}>
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full backdrop-blur-md bg-opacity-80">
        {notification && (
          <div className="mb-4 text-center text-white bg-pink-500 py-2 px-4 rounded-lg">
            {notification}
          </div>
        )}
        <h2 className="text-3xl font-semibold text-pink-500 text-center">Join Us!</h2>
        <p className="text-gray-600 text-center mt-2">Create an account to get started</p>
        
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" 
              placeholder="Enter your full name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" 
              placeholder="Create a password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">User Type</label>
            <select 
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" 
              value={userType} 
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
              <option value="beautician">Beautician</option>
            </select>
          </div>
          <button className="w-full bg-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-pink-600 transition">Sign Up</button>
        </form>
        
        <p className="text-gray-600 text-center mt-4">
          Already have an account? <Link to="/login" className="text-pink-500 font-medium">Login</Link>
        </p>
      </div>
    </div>
  );
}
