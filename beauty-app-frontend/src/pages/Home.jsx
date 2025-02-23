
// const Home = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold text-gray-800">Welcome to Beauty App</h1>
//       <p className="text-gray-600 mt-2">Book appointments, manage services, and grow your business!</p>
//       <div className="mt-4">
//         <span to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-md">Login</span>
//         <span to="/register" className="ml-2 px-4 py-2 bg-green-600 text-white rounded-md">Register</span>
//       </div>
//     </div>
//   );
// };

// export default Home;
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Home() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-pink-50 text-gray-800">
            {/* Navbar */}
            <div className="bg-white shadow-md p-6">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-pink-500">Infinity's Beauty</h1>
                    <div className="hidden md:flex space-x-6 items-center">
                        <Link to="/login" className="text-pink-500 font-semibold">
                            <span className="text-pink-500 font-semibold">
                                Login
                            </span>
                        </Link>
                        <Link to="/register"><span className="bg-pink-500 text-white px-4 py-2 rounded-full">Register</span></Link>
                    </div>
                    <button
                        className="md:hidden text-pink-500 text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-white py-4 shadow-md">
                        <Link to="/login" className="text-pink-500 font-semibold" onClick={() => setMenuOpen(false)}>Login</Link>
                        <Link to="/register" className="bg-pink-500 text-white px-4 py-2 rounded-full" onClick={() => setMenuOpen(false)}>Register</Link>
                    </div>
                )}
            </div>


            {/* Hero Section */}
            <div className="text-center py-20 px-6 bg-gradient-to-r from-pink-400 to-red-400 text-white">
                <h1 className="text-5xl font-bold">Enhance Your Beauty with Us</h1>
                <p className="mt-4 text-lg">Book appointments, get beauty tips, and enjoy exclusive offers.</p>
                <button className="mt-6 bg-white text-pink-500 px-6 py-3 text-lg font-semibold rounded-full">Get Started</button>
            </div>

            {/* Services Section */}
            <div className="py-16 px-6">
                <h2 className="text-3xl font-semibold text-center">Our Services</h2>
                <div className="mt-8 grid md:grid-cols-3 gap-6">
                    <div className="bg-white shadow-lg p-6 rounded-xl text-center">
                        <h3 className="text-xl font-bold">Makeup</h3>
                        <p className="mt-2">Professional makeup for every occasion.</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-xl text-center">
                        <h3 className="text-xl font-bold">Hair Styling</h3>
                        <p className="mt-2">Trendy cuts, styling, and treatments.</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-xl text-center">
                        <h3 className="text-xl font-bold">Skincare</h3>
                        <p className="mt-2">Facials, treatments, and skincare routines.</p>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="py-16 px-6 bg-gray-100">
                <h2 className="text-3xl font-semibold text-center">What Clients Say</h2>
                <div className="mt-8 flex flex-col md:flex-row gap-6">
                    <div className="bg-white shadow-lg p-6 rounded-xl">
                        <p>"Amazing service! My skin feels great!"</p>
                        <h4 className="mt-2 font-bold">- Sarah M.</h4>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-xl">
                        <p>"The best makeup artist I've ever had!"</p>
                        <h4 className="mt-2 font-bold">- Emily R.</h4>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-xl">
                        <p>"The make service is very proffessional, The artist is cool!"</p>
                        <h4 className="mt-2 font-bold">- Chen</h4>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center py-12 px-6 bg-pink-500 text-white">
                <h2 className="text-3xl font-semibold">Ready to Glow?</h2>
                <p className="mt-2">Download our app and book your next beauty session today!</p>
                <button className="mt-6 bg-white text-pink-500 px-6 py-3 text-lg font-semibold rounded-full">Download App</button>
            </div>
        </div>
    );
}
