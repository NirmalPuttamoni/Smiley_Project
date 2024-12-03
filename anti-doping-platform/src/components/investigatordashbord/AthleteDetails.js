import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import Link for routing
import RightPanel from './RightPanel'; // Import RightPanel component

const AthleteDetails = () => {
  const [selectedSection, setSelectedSection] = useState('Medical Test Reports'); // Default to a valid section
  const params = useParams();

  // console.log(params.athleteId)

  return (
    <div style={containerStyle}>
      {/* Left Panel */}
      <div style={leftPanelStyle}>
        <h3 style={headerStyle}>Athlete Details</h3>
        <ul style={menuListStyle}>
          {menuItems.map((item) => (
            <li
              key={item}
              style={{
                ...menuItemStyle,
                backgroundColor: selectedSection === item ? '#1e40af' : '#3b82f6', // Highlight selected item
                color: selectedSection === item ? '#fff' : '#e0e7ff', // Light text for unselected
              }}
              onClick={() => setSelectedSection(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        {/* Analyze Button */}
        <div
          style={{
            ...analyzeStyle,
            backgroundColor: selectedSection === 'Analyze' ? '#ffffff' : '#ffffff',
            color: selectedSection === 'Analyze' ? '#1e40af' : '#1e40af',
          }}
          onClick={() => setSelectedSection('Analyze')}
        >
          ANALYZE
        </div>
      </div>

      {/* Right Panel */}
      <div style={rightPanelStyle}>
        <RightPanel selectedSection={selectedSection} athleteId={params.athleteId} />
      </div>
    </div>
  );
};

// Static menu items
const menuItems = [
  'Medical Test Reports',
  'Biological Passport Records',
  'Access to Social Media',
  'Financial Transactions',
  'Travel History',
];

// Styles for AthleteDetails
const containerStyle = {
  display: 'flex',
  height: '100vh', // Full viewport height
  fontFamily: "'Poppins', sans-serif", // Clean and modern font
  backgroundColor: '#f3f4f6', // Light background for contrast
};

const leftPanelStyle = {
  width: '25%',
  backgroundColor: '#2563eb', // Rich blue for the left panel
  padding: '30px 20px',
  borderRight: '2px solid #e5e7eb',
  position: 'fixed', // Keeps the panel static
  top: 0,
  left: 0,
  bottom: 0,
  overflow: 'hidden', // Prevent unnecessary scroll
  color: '#fff', // Text in white for contrast
  boxShadow: '2px 0 10px rgba(0, 0, 0, 0.15)', // Shadow effect
};

const headerStyle = {
  fontSize: '28px',
  fontWeight: '700',
  marginBottom: '40px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  textAlign: 'center',
  borderBottom: '3px solid #1e40af',
  paddingBottom: '10px',
};

const menuListStyle = {
  listStyleType: 'none',
  padding: '0',
};

const menuItemStyle = {
  padding: '15px 20px',
  marginBottom: '20px',
  cursor: 'pointer',
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  backgroundColor: '#3b82f6', // Default blue
  color: '#e0e7ff', // Softer light blue text
  textAlign: 'left',
  fontWeight: '500',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
};

// Add hover effect for menu items
menuItemStyle[':hover'] = {
  backgroundColor: '#1e3a8a', // Darker blue on hover
  transform: 'scale(1.05)', // Scale up slightly
};

const analyzeStyle = {
  padding: '20px',
  marginTop: '60px', // Space from the menu items
  borderRadius: '15px',
  textAlign: 'center',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', // Stronger shadow for emphasis
  fontSize: '18px',
};

analyzeStyle[':hover'] = {
  transform: 'scale(1.1)', // Slightly larger on hover
  boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)', // Pronounced shadow
};

const rightPanelStyle = {
  marginLeft: '25%', // Matches the fixed left panel width
  flex: 1,
  padding: '50px',
  backgroundColor: '#ffffff', // Clean white for content
  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)', // Light inset shadow
};

export default AthleteDetails;