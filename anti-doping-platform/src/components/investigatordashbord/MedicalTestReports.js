import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'; // For pie and bar charts

const MedicalTestReports = () => {
  // Sample data for visualization
  const sampleDataPie = [
    { name: 'Substance Detected', value: 40 },
    { name: 'No Substance Detected', value: 60 },
  ];

  const sampleDataBar = [
    { name: 'Test 1', substance: 45 },
    { name: 'Test 2', substance: 60 },
    { name: 'Test 3', substance: 30 },
    { name: 'Test 4', substance: 80 },
  ];

  const COLORS = ['#4CAF50', '#FF5722'];  // Using green and red colors

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    width: '30%',
    padding: '20px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Hover transition
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)', // Slight scale on hover
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)', // Increased shadow on hover
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
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
        Medical Test Reports
      </h4>

      {/* Card Grid - 3 cards per row */}
      <div style={cardGridStyle}>
        <div
          className="card"
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h4 style={sectionTitleStyle}>1. Sample Identification</h4>
          <ul style={listStyle}>
            <li><strong>Sample Code/ID:</strong> Unique anonymized code to maintain confidentiality and traceability.</li>
            <li><strong>Type of Sample:</strong> Urine, blood, or other biological materials.</li>
            <li><strong>Sample Collection Date & Time:</strong> When the sample was collected.</li>
            <li><strong>Testing Authority:</strong> NADA, WADA, or sports federation.</li>
          </ul>
        </div>

        <div
          className="card"
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h4 style={sectionTitleStyle}>2. Athlete Information</h4>
          <ul style={listStyle}>
            <li><strong>Demographics:</strong> Gender, age, sport, and event details.</li>
            <li><strong>Therapeutic Use Exemption (TUE):</strong> Any approved exemption for using prohibited substances for medical reasons.</li>
          </ul>
        </div>

        <div
          className="card"
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h4 style={sectionTitleStyle}>3. Laboratory Analysis</h4>
          <ul style={listStyle}>
            <li><strong>Date of Receipt:</strong> When the sample was received at the laboratory.</li>
            <li><strong>Testing Date:</strong> The date the analysis was conducted.</li>
            <li><strong>Analysis Methods:</strong> Techniques used: GC-MS, LC-MS/MS, IRMS.</li>
            <li><strong>Tested Parameters:</strong> Screening for prohibited substances and endogenous substances like testosterone/epitestosterone ratio.</li>
          </ul>
        </div>
      </div>

      {/* Card Grid - 3 cards per row */}
      <div style={cardGridStyle}>
        <div
          className="card"
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h4 style={sectionTitleStyle}>4. Results Summary</h4>
          <p style={paragraphStyle}>
            The results of the test are summarized below. A pie chart shows the proportion of substances detected vs. substances not detected.
          </p>
          <div style={{ width: '100%', height: '300px', marginTop: '20px' }}>
            <PieChart width={300} height={300}>
              <Pie
                data={sampleDataPie}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                fill="#8884d8"
                label
              >
                {sampleDataPie.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}

              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>

        <div
          className="card"
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h4 style={sectionTitleStyle}>5. Confirmatory Analysis</h4>
          <p style={paragraphStyle}>Sample B testing and verification methods to confirm initial results.</p>
        </div>

        <div
          className="card"
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h4 style={sectionTitleStyle}>6. Interpretations and Observations</h4>
          <ul style={listStyle}>
            <li><strong>Endogenous vs. Exogenous:</strong> Differentiation between naturally occurring and externally introduced substances.</li>
            <li><strong>Biological Passport Data:</strong> Comparison with athlete's longitudinal data to identify anomalies.</li>
            <li><strong>Dilution or Tampering Indicators:</strong> Evidence of sample manipulation or abnormal pH/specific gravity values.</li>
          </ul>
        </div>
      </div>

      {/* Card Grid - 3 cards per row */}
      <div style={cardGridStyle}>
        <div
          className="card"
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h4 style={sectionTitleStyle}>7. Recommendations</h4>
          <ul style={listStyle}>
            <li><strong>Follow-Up Actions:</strong> Suggestions for additional testing or further investigation.</li>
            <li><strong>Compliance with TUE:</strong> Whether detected substances align with approved exemptions.</li>
          </ul>
        </div>

        <div
          className="card"
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h4 style={sectionTitleStyle}>8. Compliance and Authentication</h4>
          <ul style={listStyle}>
            <li><strong>Accreditation:</strong> Certification of compliance with ISO standards and WADA protocols.</li>
            <li><strong>Chain of Custody:</strong> Ensures the sample was securely handled.</li>
            <li><strong>Authorized Signatures:</strong> Validation by laboratory personnel.</li>
            <li><strong>WADA Code Compliance:</strong> Confirmation of adherence to anti-doping rules.</li>
          </ul>
        </div>

        <div
          className="card"
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h4 style={sectionTitleStyle}>9. Additional Technical Data</h4>
          <ul style={listStyle}>
            <li><strong>Test Protocols:</strong> Step-by-step documentation of how the tests were conducted.</li>
            <li><strong>Statistical Uncertainty:</strong> Margin of error or confidence intervals.</li>
            <li><strong>Auxiliary Findings:</strong> Detection of other non-prohibited substances.</li>
          </ul>
        </div>
      </div>

      {/* Bar Chart for Substance Detection Over Time */}
      <div style={cardGridStyle}>
        <div
          className="card"
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h4 style={sectionTitleStyle}>Substance Detection Over Time</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sampleDataBar}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="substance" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

// Style for card grid layout
const cardGridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '20px',
  marginBottom: '40px',
};

// Style for section titles
const sectionTitleStyle = {
  fontSize: '1.5rem',
  fontWeight: '600',
  marginBottom: '10px',
  color: '#333',
};

// Style for list items
const listStyle = {
  listStyleType: 'none',
  paddingLeft: '0',
  color: '#666',
};

// Style for paragraphs
const paragraphStyle = {
  color: '#666',
  marginBottom: '15px',
};
export default MedicalTestReports;