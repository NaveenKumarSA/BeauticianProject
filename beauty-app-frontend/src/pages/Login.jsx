import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackbar, setSnackbar] = useState({ message: "", type: "", visible: false });
  const navigate = useNavigate(); // Router hook for navigation


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://beauticianproject-api.onrender.com/api/auth/login", {
        email,
        password,
      });
      setTimeout(() => {
        navigate("/beautician_dashboard");
      }, 2000); 
      setSnackbar({ message: "Login Successful! 🎉", type: "success", visible: true });
      console.log("Registration successful:", response.data);
    } catch (error) {
      setSnackbar({ message: "Login Failed. Please check your credentials.", type: "error", visible: true });
      console.error("Registration failed:", error.response ? error.response.data : error.message);
    }
    // Hide snackbar after 3 seconds
    setTimeout(() => {
      setSnackbar((prev) => ({ ...prev, visible: false }));
    }, 3000);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x1600/?makeup,beauty')" }}>

      {/* Snackbar */}
      {snackbar.visible && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg text-white shadow-lg ${snackbar.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
        >
          {snackbar.message}
        </div>
      )}

      <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full backdrop-blur-md bg-opacity-80">
        <h2 className="text-3xl font-semibold text-pink-500 text-center">Welcome Back!</h2>
        <p className="text-gray-600 text-center mt-2">Login to continue</p>

        <form className="mt-6" onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full bg-pink-500 py-2 rounded-lg font-semibold hover:bg-pink-600 transition">
            Login
          </button>
        </form>

        <p className="text-gray-600 text-center mt-4">
          Don't have an account? <Link to="/register"><span className="text-pink-500 font-medium">Sign Up</span>

          </Link>
        </p>
      </div>
    </div>
  );
}
