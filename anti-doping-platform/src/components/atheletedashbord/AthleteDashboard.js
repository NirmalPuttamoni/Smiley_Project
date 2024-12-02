import React, { useState } from "react";
import LeftNav from "./LeftNav"; // Import LeftNav component
import PersonalInformation from "./PersonalInformation"; // Import respective content components
import TestingSchedules from "./TestingSchedules";
import TestingResults from "./TestingResults";
import TUEManagement from "./TUEManagement";
import AdditionalRecords from './AdditionalRecords';
import AthleteEducation from "./AthleteEducation";
// Import other components as needed

const containerStyle = {
  display: 'flex',
  height: '100vh',
  fontFamily: "'Poppins', sans-serif",
  backgroundColor: '#f3f4f6',
};

const rightPanelStyle = {
  marginLeft: '25%',
  flex: 1,
  padding: '50px',
  backgroundColor: '#ffffff',
  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
};

const AthleteDashboard = () => {
  const [activeSection, setActiveSection] = useState("Personal Information");

  const menuItems = [
    "Personal Information",
    "Testing Schedules",
    "Testing Results",
    "TUE Management",
    "Additional Records",
    "Athlete Education",
  ];

  // Dynamically render content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case "Personal Information":
        return <PersonalInformation />;
      case "Testing Schedules":
        return <TestingSchedules />;
      case "Testing Results":
        return <TestingResults />;
      case "TUE Management":
        return <TUEManagement />;
      case "Additional Records":
        return <AdditionalRecords />;
      case "Athlete Education":
        return <AthleteEducation />;
      default:
        return <PersonalInformation />;
    }
  };

  return (
    <div style={containerStyle}>
      {/* Left Panel (Sidebar) */}
      <LeftNav
        menuItems={menuItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Right Panel (Content Area) */}
      <div style={rightPanelStyle}>
        {renderContent()}
      </div>
    </div>
  );
};

export default AthleteDashboard;
