import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

// const travelData = [
//   {
//     date: "2024-11-01",
//     destination: "Vienna, Austria",
//     purpose: "Competition",
//     duration: "5 days",
//     visaDetails: "Schengen Visa (Valid: 2024-01-01 to 2024-12-31)",
//     ticketCost: "$450",
//     accompanyingPersons: "Coach: John Doe",
//     coordinates: [48.2082, 16.3738],
//     flagged: false,
//     riskScore: 3, // Scale of 1-10
//     weather: "Mild (20°C)",
//   },
//   {
//     date: "2024-10-15",
//     destination: "Moscow, Russia",
//     purpose: "Training Camp",
//     duration: "10 days",
//     visaDetails: "Russian Tourist Visa (Valid: 2024-06-01 to 2025-05-31)",
//     ticketCost: "$600",
//     accompanyingPersons: "Physiotherapist: Jane Smith",
//     coordinates: [55.7558, 37.6173],
//     flagged: true,
//     riskScore: 8,
//     weather: "Cold (-5°C)",
//   },
//   {
//     date: "2024-09-10",
//     destination: "Nairobi, Kenya",
//     purpose: "Altitude Training",
//     duration: "14 days",
//     visaDetails: "E-Visa (Valid: 2024-09-01 to 2024-12-31)",
//     ticketCost: "$700",
//     accompanyingPersons: "Training Partner: Alex Brown",
//     coordinates: [-1.286389, 36.817223],
//     flagged: false,
//     riskScore: 6,
//     weather: "Warm (25°C)",
//   },
// ];

const TravelHistory = ({athleteId}) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [travelData, setTravelData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.post("http://localhost:8080/athletes/get-athlete-details-by-id", { athleteId: athleteId });
      setTravelData(response?.data?.TravelHistory);

      console.log(response?.data?.TravelHistory)

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);


  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
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
        Travel History
      </h4>
      </header>

      <main style={styles.main}>
        {/* Travel History Table */}
        <section style={styles.tableSection}>
          <h2 style={styles.sectionTitle}>Travel History</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Destination</th>
                <th style={styles.th}>Purpose</th>
                <th style={styles.th}>Duration</th>
                <th style={styles.th}>Risk Score</th>
                <th style={styles.th}>Weather</th>
                <th style={styles.th}>Flagged</th>
              </tr>
            </thead>
            <tbody>
              {travelData?.map((event, index) => (
                <tr
                  key={index}
                  style={
                    event.flagged ? styles.suspiciousRow : styles.normalRow
                  }
                  onClick={() => setSelectedRow(event)}
                >
                  <td style={styles.td}>{event.date}</td>
                  <td style={styles.td}>{event.destination}</td>
                  <td style={styles.td}>{event.purpose}</td>
                  <td style={styles.td}>{event.duration}</td>
                  <td style={styles.td}>{event.riskScore}</td>
                  <td style={styles.td}>{event.weather}</td>
                  <td style={styles.td}>{event.flagged ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Travel Map with Heatmap */}
        <section style={styles.mapSection}>
          <h2 style={styles.sectionTitle}>Travel Map</h2>
          <MapContainer
            center={[20.5937, 78.9629]} // Centered over the world
            zoom={2}
            style={styles.map}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {travelData?.map((event, index) => (
              <Marker key={index} position={event.coordinates}>
                <Popup>
                  <strong>{event.destination}</strong>
                  <br />
                  Purpose: {event.purpose}
                  <br />
                  Duration: {event.duration}
                  <br />
                  Risk Score: {event.riskScore}
                  <br />
                  Weather: {event.weather}
                </Popup>
              </Marker>
            ))}
            {travelData?.map((event, index) => (
              <Circle
                key={index}
                center={event.coordinates}
                radius={event.riskScore * 10000}
                pathOptions={{ color: event.flagged ? "red" : "blue" }}
              />
            ))}
          </MapContainer>
        </section>

        {/* Detailed Event Information */}
        {selectedRow && (
          <section style={styles.detailSection}>
            <h2 style={styles.sectionTitle}>Event Details</h2>
            <p><strong>Date:</strong> {selectedRow.date}</p>
            <p><strong>Destination:</strong> {selectedRow.destination}</p>
            <p><strong>Purpose:</strong> {selectedRow.purpose}</p>
            <p><strong>Duration:</strong> {selectedRow.duration}</p>
            <p><strong>Visa Details:</strong> {selectedRow.visaDetails}</p>
            <p><strong>Ticket Cost:</strong> {selectedRow.ticketCost}</p>
            <p><strong>Accompanying Persons:</strong> {selectedRow.accompanyingPersons}</p>
            <p><strong>Weather:</strong> {selectedRow.weather}</p>
            <p><strong>Risk Score:</strong> {selectedRow.riskScore}</p>
          </section>
        )}
      </main>
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  main: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  tableSection: {
    flex: 1,
    minWidth: "600px",
  },
  mapSection: {
    flex: 1,
    height: "500px",
    minWidth: "600px",
  },
  detailSection: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  th: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px",
    textAlign: "left",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  normalRow: {
    cursor: "pointer",
  },
  suspiciousRow: {
    cursor: "pointer",
    backgroundColor: "#ffe6e6",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  sectionTitle: {
    marginBottom: "10px",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
};

export default TravelHistory;