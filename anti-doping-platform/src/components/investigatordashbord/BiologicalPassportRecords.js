import axios from "axios";
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; // For line chart

const BiologicalPassportRecords = ({athleteId}) => {

  const [athleteDetails, setAthleteDetails] = useState({});
  
  const getData = async () => {
    try {
      const response = await axios.post("http://localhost:8080/athletes/get-athlete-details-by-id", {athleteId: athleteId});
      setAthleteDetails(response?.data?.BiologicalPassportRecords);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(athleteDetails)
  useEffect(() => {
    getData();
  }, []);


  // Sample data for visualization
  // const sampleDataLine = [
  //   { date: '2024-01-01', value: 0.8 },
  //   { date: '2024-02-01', value: 0.85 },
  //   { date: '2024-03-01', value: 0.9 },
  //   { date: '2024-04-01', value: 0.88 },
  //   { date: '2024-05-01', value: 0.92 },
  //   { date: '2024-06-01', value: 0.91 },
  // ];
  
  const sampleDataLine = athleteDetails?.sampleDataLine;

  // State to handle hover effects
  const [hoveredCard, setHoveredCard] = useState(null);

  // Handler for mouse enter
  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  // Handler for mouse leave
  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f7f6', borderRadius: '10px' }}>
      <h4
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2.5rem',
          fontWeight: '600',
          color: '#333',
          textTransform: 'uppercase',
        }}
      >
        Biological Passport Records
      </h4>

      {/* Card Grid - 3 cards per row */}
      <div style={cardGridStyle}>
        <div
          className="card"
          style={{ ...cardStyle, boxShadow: hoveredCard === 'card1' ? '0 15px 30px rgba(0, 0, 0, 0.3)' : '0 6px 12px rgba(0, 0, 0, 0.1)' }}
          onMouseEnter={() => handleMouseEnter('card1')}
          onMouseLeave={handleMouseLeave}
        >
          <h4 style={sectionTitleStyle}>1. Athlete Information</h4>
          <ul style={listStyle}>
            <li><strong>Full Name:</strong>{athleteDetails?.Full_Name}</li>
            <li><strong>Gender:</strong>{athleteDetails?.Gender}</li>
            <li><strong>Sport:</strong>{athleteDetails?.Sport}</li>
            <li><strong>Date of Birth:</strong>{athleteDetails?.Date_of_Birth}</li>
            <li><strong>Unique Athlete ID:</strong>{athleteDetails?.Unique_Athlete_ID}</li>
          </ul>
        </div>

        <div
          className="card"
          style={{ ...cardStyle, boxShadow: hoveredCard === 'card2' ? '0 15px 30px rgba(0, 0, 0, 0.3)' : '0 6px 12px rgba(0, 0, 0, 0.1)' }}
          onMouseEnter={() => handleMouseEnter('card2')}
          onMouseLeave={handleMouseLeave}
        >
          <h4 style={sectionTitleStyle}>2. Data Collected</h4>
          <ul style={listStyle}>
            <li><strong>Parameters Monitored:</strong>{athleteDetails?.Parameters_Monitored}</li>
            <li><strong>Collection Method:</strong>{athleteDetails?.Collection_Method}</li>
            <li><strong>Collection Frequency:</strong>{athleteDetails?.Collection_Frequency}</li>
            <li><strong>Medical Professional:</strong>{athleteDetails?.Medical_Professional}</li>
          </ul>
        </div>

        <div
          className="card"
          style={{ ...cardStyle, boxShadow: hoveredCard === 'card3' ? '0 15px 30px rgba(0, 0, 0, 0.3)' : '0 6px 12px rgba(0, 0, 0, 0.1)' }}
          onMouseEnter={() => handleMouseEnter('card3')}
          onMouseLeave={handleMouseLeave}
        >
          <h4 style={sectionTitleStyle}>3. Data Analysis</h4>
          <ul style={listStyle}>
            <li><strong>Testing Methods:</strong> {athleteDetails?.Testing_Methods}</li>
            <li><strong>Threshold Levels:</strong> {Object.entries(athleteDetails?.Threshold_Levels || {}).map(([key, value]) => (
                <li key={key}>{key}: {value}</li>
            ))}</li>
            <li><strong>Alerts & Flags:</strong>{athleteDetails?.Alerts_Flags}</li>
          </ul>
        </div>
      </div>

      {/* Card Grid - 3 cards per row */}
      <div style={cardGridStyle}>
        <div
          className="card"
          style={{ ...cardStyle, width:"100%", boxShadow: hoveredCard === 'card4' ? '0 15px 30px rgba(0, 0, 0, 0.3)' : '0 6px 12px rgba(0, 0, 0, 0.1)' }}
          onMouseEnter={() => handleMouseEnter('card4')}
          onMouseLeave={handleMouseLeave}
        >
          <h4 style={sectionTitleStyle}>4. Biological Data Trend</h4>
          <p style={paragraphStyle}>
            The biological data trends over time help in detecting abnormalities. Below is a line chart representing one of the tracked parameters.
          </p>
          <div style={{ width: '100%', height: '300px', marginTop: '20px' }}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={sampleDataLine}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div
          className="card"
          style={{ ...cardStyle,width:"40%" , boxShadow: hoveredCard === 'card5' ? '0 15px 30px rgba(0, 0, 0, 0.3)' : '0 6px 12px rgba(0, 0, 0, 0.1)' }}
          onMouseEnter={() => handleMouseEnter('card5')}
          onMouseLeave={handleMouseLeave}
        >
          <h4 style={sectionTitleStyle}>5. Alerts and Notifications</h4>
          <ul style={listStyle}>
            <li><strong>Threshold Violations:</strong> {athleteDetails?.Threshold_Violations}</li>
            <li><strong>Potential Doping:</strong> {athleteDetails?.Potential_Doping}</li>
            <li><strong>Regulatory Compliance:</strong> {athleteDetails?.Regulatory_Compliance}</li>
          </ul>
        </div>

        <div
          className="card"
          style={{ ...cardStyle, width:"40%",boxShadow: hoveredCard === 'card6' ? '0 15px 30px rgba(0, 0, 0, 0.3)' : '0 6px 12px rgba(0, 0, 0, 0.1)' }}
          onMouseEnter={() => handleMouseEnter('card6')}
          onMouseLeave={handleMouseLeave}
        >
          <h4 style={sectionTitleStyle}>6. Compliance and Review</h4>
          <ul style={listStyle}>
            <li><strong>Verification:</strong> {athleteDetails?.Verification}</li>
            <li><strong>Record Updates:</strong>{athleteDetails?.Record_Updates}</li>
            <li><strong>Review Cycle:</strong>{athleteDetails?.Review_Cycle}</li>
          </ul>
        </div>
      </div>

      {/* Download Button */}
      <div style={downloadButtonContainer}>
        <button style={downloadButtonStyle} onClick={() => alert('Downloading Biological Passport Record...')}>
          Download Biological Passport Record
        </button>
      </div>
    </div>
  );
};

// Styles
const headerStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#2d3748',
  marginBottom: '20px',
};

const descriptionStyle = {
  fontSize: '16px',
  marginBottom: '20px',
  color: '#4A5568',
};

const cardGridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '20px',
  marginBottom: '30px',
};

const cardStyle = {
  width: '30%',
  backgroundColor: 'white',
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease-in-out',
};

const sectionTitleStyle = {
  fontSize: '1.25rem',
  fontWeight: '600',
  color: '#2d3748',
  marginBottom: '15px',
};

const listStyle = {
  listStyleType: 'none',
  paddingLeft: '0',
  fontSize: '14px',
  lineHeight: '1.8',
};

const paragraphStyle = {
  fontSize: '14px',
  color: '#4A5568',
};

const downloadButtonContainer = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '30px',
};

const downloadButtonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default BiologicalPassportRecords;