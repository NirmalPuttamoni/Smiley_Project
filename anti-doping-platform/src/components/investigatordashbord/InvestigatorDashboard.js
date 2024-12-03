import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const InvestigatorDashboard = () => {
  const [athletesData, setAthletesData] = useState([]);

  const [investigatorName, setInvestigatorName] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/athletes/get-all-athletes");
      console.log(response.data);
      setAthletesData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    setInvestigatorName(JSON.parse(sessionStorage.getItem('userData')));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {" "}
      {/* Changed background to white */}
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 flex items-center justify-between shadow-md rounded-b-xl transition-all duration-300 ease-in-out">
        {/* Logo */}
        <div className="flex items-center space-x-3 text-white font-bold text-xl">
          <span>Investigator</span>
          <span className="text-yellow-400">Dashboard</span>
        </div>

        {/* Profile Picture */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white font-medium text-sm">{investigatorName.name}</span>
        </div>
      </nav>
      {/* Main Content */}
      <div className="py-12">
        <div className="container mx-auto px-6">
          <h5
            style={{
              marginBottom: "30px",
              fontSize: "2.2rem",
              fontWeight: "700",
              color: "#2C3E50",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Athlete Dashboard
          </h5>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {athletesData.map((athlete) => (
              <div
                key={athlete.id}
                className="bg-white p-3.5 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105"
              >
                {/* Image Section */}
                <div className="flex-shrink-0 mb-4">
                  <img
                    src={athlete.image}
                    alt={athlete.name}
                    className="w-full h-40 object-cover rounded-lg border-4 border-indigo-500 shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg"
                  />
                </div>

                {/* Text Section */}
                <div className="flex-1 flex flex-col justify-between">
                  <h2 className="text-xl font-semibold text-indigo-700 hover:text-indigo-500 transition-all duration-300 ease-in-out">
                    {athlete.name}
                  </h2>
                  <p className="text-gray-700 text-md">{athlete.sport}</p>
                  <p className="text-gray-600 mt-1 text-sm">
                    {athlete.description}
                  </p>

                  {/* View Details Button */}
                  <div className="mt-1 flex justify-center">
                    <Link
                      to={`/athlete-details/${athlete._id}`}
                      className="text-indigo-600 hover:text-indigo-800 font-medium text-lg transition-all duration-300 transform hover:scale-105"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestigatorDashboard;
