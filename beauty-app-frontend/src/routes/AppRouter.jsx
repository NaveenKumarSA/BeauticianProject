import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BeauticianDashboard  from "../pages/BeauticianDashboard";
import  UserDashboard from "../pages/UserDashboard";
const AppRouter = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      {  <Route path="/beautician_dashboard" element={<BeauticianDashboard />} />}
      {  <Route path="/user_dashboard" element={<UserDashboard />} />}
      </Routes>
    </Router>
  );
};

export default AppRouter;
