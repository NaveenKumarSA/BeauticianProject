import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function BeauticianDashboard() {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    // axios.get("https://your-api-endpoint.com/enquiries")
    //   .then(response => setEnquiries(response.data))
    //   .catch(error => console.error("Error fetching enquiries", error));

    setEnquiries([
        {user:"user1", message:"I Love the service "}, 
        {user:"user1", message:"I Love the service "}, 
        {user:"user1", message:"I Love the service "}, 
        {user:"user1", message:"I Love the service "}, 
        {user:"user1", message:"I Love the service "}, 
    ])
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-pink-500">Beautician Dashboard</h1>
      <p className="text-gray-700 mt-2">Here are your service enquiries:</p>
      <ul className="mt-4 bg-white shadow p-4 rounded-lg">
        {enquiries.length ? enquiries.map((enquiry, index) => (
          <li key={index} className="p-2 border-b">{enquiry.message} - {enquiry.user}</li>
        )) : <p>No enquiries yet.</p>}
      </ul>
    </div>
  );
}
