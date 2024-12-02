import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import ReportForm from "./components/ReportForm";
import InvestigatorDashboard from "./components/investigatordashbord/InvestigatorDashboard";
import AthleteDetails from "./components/investigatordashbord/AthleteDetails"; // Correct path for Investigator folder
import AthleteDashboard from "./components/atheletedashbord/AthleteDashboard"; // Correct path for Athlete folder
import BiologicalPassportRecords from "./components/investigatordashbord/BiologicalPassportRecords";
import LandingPage from "./components/LandingPage"; // LandingPage component
import Login from "./components/Login"; // LandingPage component
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/report" element={<ReportForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<div>Welcome to the dashboard!</div>} />
        <Route path="/investigator-dashboard" element={<InvestigatorDashboard />} />
        <Route path="/athlete-details/:athleteId" element={<AthleteDetails />} />
        <Route path="/athlete-dashboard" element={<AthleteDashboard />} />
        <Route path="/biological-passport-records" element={<BiologicalPassportRecords />} />
        <Route path="/" element={<LandingPage />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;
