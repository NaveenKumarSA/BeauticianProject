import { useEffect, useState } from "react";

export default function UserDashboard() {
    const [beauticians, setBeauticians] = useState([]);
  
    useEffect(() => {
    //   axios.get("https://your-api-endpoint.com/beauticians")
    //     .then(response => setBeauticians(response.data))
    //     .catch(error => console.error("Error fetching beauticians", error));

        setBeauticians([
            {
                name:"aksh",city:"chennai"
            },
            {
                name:"aksh",city:"chennai"
            },
            {
                name:"aksh",city:"chennai"
            },
            {
                name:"aksh",city:"chennai"
            },
        ])

    }, []);
  
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-semibold text-pink-500">Find a Beautician</h1>
        <p className="text-gray-700 mt-2">Browse beauticians in your city:</p>
        <ul className="mt-4 bg-white shadow p-4 rounded-lg">
          {beauticians.length ? beauticians.map((beautician, index) => (
            <li key={index} className="p-2 border-b">{beautician.name} - {beautician.city}</li>
          )) : <p>No beauticians available.</p>}
        </ul>
      </div>
    );
  }