import express from "express";
import userRouter from "./routes/userRoutes.js";
import athleteRouter from "./routes/athletesRoutes.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/athletes", athleteRouter);
// app.use("/products", productRouter);

// app.get("/", (req, res) => {
//   res.json([
//     {
//       Full_Name: "Rohit Sharma",
//       Gender: "Male",
//       Sport: "Cricket",
//       Date_of_Birth: "1995-07-25",
//       Unique_Athlete_ID: "IND-010",
//       Parameters_Monitored: ["Testosterone", "Hemoglobin", "Cortisol"],
//       Collection_Method: "Blood, Urine",
//       Collection_Frequency: "Quarterly",
//       Medical_Professional: "Dr. Ramesh Kumar",
//       Testing_Methods: "Testosterone and Cortisol Levels",
//       Threshold_Levels: {
//         Testosterone: "0.5-1.2 ng/mL",
//         Cortisol: "5-20 µg/dL",
//       },
//       Alerts_Flags: "None",
//       Threshold_Violations: "None",
//       Potential_Doping: "No",
//       Regulatory_Compliance: "WADA Anti-Doping Code",
//       Verification: "Verified with competition results and past test records",
//       Record_Updates: "Quarterly updates",
//       Review_Cycle: "Annual review",
//     },
//     {
//       Full_Name: "Ravi Kumar",
//       Gender: "Male",
//       Sport: "Cycling",
//       Date_of_Birth: "1996-03-12",
//       Unique_Athlete_ID: "IND-001",
//       Parameters_Monitored: [
//         "Hemoglobin",
//         "Testosterone",
//         "Red Blood Cell Count",
//       ],
//       Collection_Method: "Blood, Urine",
//       Collection_Frequency: "Quarterly",
//       Medical_Professional: "Dr. Rajesh Sharma",
//       Testing_Methods: "Testosterone/Epitestosterone Ratio",
//       Threshold_Levels: {
//         Testosterone: "0.6-1.5 ng/mL",
//         Hemoglobin: "13-17 g/dL",
//       },
//       Alerts_Flags: "None",
//       Threshold_Violations: "None",
//       Potential_Doping: "No",
//       Regulatory_Compliance: "WADA Anti-Doping Code",
//       Verification:
//         "Cross-checked with competition results and previous test data",
//       Record_Updates: "Updated quarterly with testing results",
//       Review_Cycle: "Annual review by WADA",
//     },
//     {
//       Full_Name: "Anjali Singh",
//       Gender: "Female",
//       Sport: "Weightlifting",
//       Date_of_Birth: "1994-05-22",
//       Unique_Athlete_ID: "IND-002",
//       Parameters_Monitored: ["Hemoglobin", "Testosterone", "Cortisol"],
//       Collection_Method: "Blood, Urine",
//       Collection_Frequency: "Monthly",
//       Medical_Professional: "Dr. Priya Desai",
//       Testing_Methods: "Cortisol and Testosterone Levels",
//       Threshold_Levels: {
//         Testosterone: "0.3-1.0 ng/mL",
//         Cortisol: "5-25 µg/dL",
//       },
//       Alerts_Flags: "None",
//       Threshold_Violations: "None",
//       Potential_Doping: "No",
//       Regulatory_Compliance: "WADA Anti-Doping Code",
//       Verification: "Reviewed by WADA upon suspicion of irregularities",
//       Record_Updates: "Updated monthly after tests",
//       Review_Cycle: "Quarterly review by WADA",
//     },
//     {
//       Full_Name: "Manoj Kumar",
//       Gender: "Male",
//       Sport: "Boxing",
//       Date_of_Birth: "1993-09-14",
//       Unique_Athlete_ID: "IND-003",
//       Parameters_Monitored: ["Testosterone", "Red Blood Cell Count", "EPO"],
//       Collection_Method: "Blood",
//       Collection_Frequency: "Quarterly",
//       Medical_Professional: "Dr. Ajay Verma",
//       Testing_Methods: "Testosterone/EPO Ratio",
//       Threshold_Levels: { Testosterone: "0.5-1.5 ng/mL", EPO: "5-12 mU/mL" },
//       Alerts_Flags: "None",
//       Threshold_Violations: "None",
//       Potential_Doping: "No",
//       Regulatory_Compliance: "WADA Anti-Doping Code",
//       Verification: "Cross-checked with external results",
//       Record_Updates: "Test data updated quarterly",
//       Review_Cycle: "Annual review by WADA",
//     },
//     {
//       Full_Name: "Simran Kaur",
//       Gender: "Female",
//       Sport: "Athletics",
//       Date_of_Birth: "1997-06-10",
//       Unique_Athlete_ID: "IND-004",
//       Parameters_Monitored: ["Testosterone", "Hemoglobin", "Creatinine"],
//       Collection_Method: "Urine, Blood",
//       Collection_Frequency: "Monthly",
//       Medical_Professional: "Dr. Sunil Chawla",
//       Testing_Methods: "Creatinine and Testosterone Analysis",
//       Threshold_Levels: {
//         Testosterone: "0.4-1.2 ng/mL",
//         Creatinine: "0.6-1.2 mg/dL",
//       },
//       Alerts_Flags: "None",
//       Threshold_Violations: "None",
//       Potential_Doping: "No",
//       Regulatory_Compliance: "WADA Anti-Doping Code",
//       Verification: "Reviewed with previous tests",
//       Record_Updates: "Monthly updates after testing",
//       Review_Cycle: "Quarterly review",
//     },
//     {
//       Full_Name: "Sandeep Yadav",
//       Gender: "Male",
//       Sport: "Football",
//       Date_of_Birth: "1995-08-04",
//       Unique_Athlete_ID: "IND-005",
//       Parameters_Monitored: ["Testosterone", "Hemoglobin", "Epitestosterone"],
//       Collection_Method: "Blood, Urine",
//       Collection_Frequency: "Quarterly",
//       Medical_Professional: "Dr. Arvind Kumar",
//       Testing_Methods: "Testosterone/Epitestosterone Ratio",
//       Threshold_Levels: {
//         Testosterone: "0.4-1.0 ng/mL",
//         Hemoglobin: "13-16 g/dL",
//       },
//       Alerts_Flags: "None",
//       Threshold_Violations: "None",
//       Potential_Doping: "No",
//       Regulatory_Compliance: "WADA Anti-Doping Code",
//       Verification: "Verified with competition results and prior tests",
//       Record_Updates: "Updated quarterly",
//       Review_Cycle: "Annual review",
//     },
//     {
//       Full_Name: "Pooja Rani",
//       Gender: "Female",
//       Sport: "Boxing",
//       Date_of_Birth: "1992-11-19",
//       Unique_Athlete_ID: "IND-006",
//       Parameters_Monitored: [
//         "Testosterone",
//         "Red Blood Cell Count",
//         "Cortisol",
//       ],
//       Collection_Method: "Blood",
//       Collection_Frequency: "Quarterly",
//       Medical_Professional: "Dr. Neha Gupta",
//       Testing_Methods: "Testosterone and Cortisol Levels",
//       Threshold_Levels: {
//         Testosterone: "0.4-1.0 ng/mL",
//         Cortisol: "5-25 µg/dL",
//       },
//       Alerts_Flags: "None",
//       Threshold_Violations: "None",
//       Potential_Doping: "No",
//       Regulatory_Compliance: "WADA Anti-Doping Code",
//       Verification: "Cross-checked with previous test records",
//       Record_Updates: "Updated quarterly",
//       Review_Cycle: "Annual review",
//     },
//     {
//       Full_Name: "Vijay Singh",
//       Gender: "Male",
//       Sport: "Wrestling",
//       Date_of_Birth: "1990-02-08",
//       Unique_Athlete_ID: "IND-007",
//       Parameters_Monitored: ["Testosterone", "Hemoglobin", "Cortisol"],
//       Collection_Method: "Blood, Urine",
//       Collection_Frequency: "Quarterly",
//       Medical_Professional: "Dr. Mohan Sharma",
//       Testing_Methods: "Testosterone, Hemoglobin and Cortisol Level Testing",
//       Threshold_Levels: {
//         Testosterone: "0.4-1.2 ng/mL",
//         Cortisol: "6-20 µg/dL",
//       },
//       Alerts_Flags: "None",
//       Threshold_Violations: "None",
//       Potential_Doping: "No",
//       Regulatory_Compliance: "WADA Anti-Doping Code",
//       Verification: "Reviewed with past tests",
//       Record_Updates: "Quarterly updates",
//       Review_Cycle: "Annual review",
//     },
//     {
//       Full_Name: "Kavita Devi",
//       Gender: "Female",
//       Sport: "Shot Put",
//       Date_of_Birth: "1994-12-01",
//       Unique_Athlete_ID: "IND-008",
//       Parameters_Monitored: [
//         "Testosterone",
//         "Red Blood Cell Count",
//         "Creatinine",
//       ],
//       Collection_Method: "Blood, Urine",
//       Collection_Frequency: "Monthly",
//       Medical_Professional: "Dr. Anil Verma",
//       Testing_Methods: "Creatinine and Testosterone Levels",
//       Threshold_Levels: {
//         Testosterone: "0.3-1.1 ng/mL",
//         Creatinine: "0.6-1.2 mg/dL",
//       },
//       Alerts_Flags: "None",
//       Threshold_Violations: "None",
//       Potential_Doping: "No",
//       Regulatory_Compliance: "WADA Anti-Doping Code",
//       Verification: "Reviewed with previous test results",
//       Record_Updates: "Monthly updates",
//       Review_Cycle: "Quarterly review",
//     },
//   ]);
// });

mongoose
  //   .connect("mongodb://127.0.0.1:27017/ecommdb")
  .connect(
    "mongodb+srv://wamore1224:yor5bBC90a7c5Yzo@cluster0.ph8yayw.mongodb.net/Neha"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
