import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = ({ onLogin }) => {
  const [userRole, setUserRole] = useState("Athelete");
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" });
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();

  const handleCreateAccount = async () => {

    await axios.post("http://localhost:8080/users/signup", data)
      .then(() => {
        console.log("uploaded user");
        if (userRole === "Whistleblower") {
          navigate("/report"); // Redirect to the ReportForm page
        } else if (userRole === "Investigator") {
          navigate("/investigator-dashboard"); // Redirect to the Investigator Dashboard
        } else {
          if (onLogin) {
            onLogin(userRole); // Pass the role to parent if needed
          }
          navigate("/athlete-dashboard"); // Redirect to Athlete's Dashboard (Athlete page)
        }
        // Navigate('$(PATH)/login');
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <div className="flex h-screen">
      <div className="hidden md:flex flex-1 bg-blue-100 items-center justify-center">
        <img
          src="https://via.placeholder.com/400"
          alt="Signup Illustration"
          className="w-2/3"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center px-8 md:px-16">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Sign up for {userRole}
        </h1>

        <div className="flex justify-between mb-6">
          {["Athlete", "Investigator", "Whistleblower"].map((role) => (
            <button
              key={role}
              onClick={() => {
                setUserRole(role);
                setData((prev) => ({ ...prev, role: role }));
              }}
              className={`px-4 py-2 text-sm font-medium border ${userRole === role ? "bg-blue-500 text-white" : "bg-gray-200"
                } rounded-md`}
            >
              {role}
            </button>
          ))}
        </div>

        <button className="flex items-center justify-center bg-blue-600 text-white py-2 rounded-md w-full mb-4">
          <img
            src="https://img.icons8.com/color/24/google-logo.png"
            alt="Google Logo"
            className="mr-2"
          />
          Sign up with Google
        </button>

        <div className="text-center text-gray-500 mb-4">Or</div>

        <form>
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="border p-2 rounded-md flex-1"
              onChange={(e) =>
                setFullName((prev) => ({ ...prev, firstName: e.target.value }))
              }
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="border p-2 rounded-md flex-1"
              onChange={(e) =>
                setFullName((prev) => ({ ...prev, lastName: e.target.value }))
              }
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="border p-2 rounded-md w-full mb-4"
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-md w-full mb-4"
            onChange={(e) =>
              setData((prev) => ({ ...prev, password: e.target.value }))
            }
          />

          <div className="flex items-center gap-2 mb-4">
            {/* <input type="checkbox" /> */}
            {/* <span className="text-sm text-gray-600">
              Creating an account means you're okay with our{" "}
              <Link href="#" className="text-blue-600 underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/login" className="text-blue-600 underline">
                Sign in
              </Link>
              .
            </span> */}
          </div>

          <button
            type="button"
            className="w-full bg-pink-500 text-white py-2 rounded-md"
            onClick={async () => {
              setData((prev) => ({
                ...prev,
                name: `${fullName.firstName} ${fullName.lastName}`,
              }));
              await handleCreateAccount();
            }}
          >
            Create Account
          </button>
        </form>

        <div className="text-center mt-4">
          Already a member?{" "}
          <a href="/login" className="text-blue-600 underline">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;