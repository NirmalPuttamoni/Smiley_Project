import express from "express";
const athleteRouter = express.Router();

import { getAllAthletes, getAllAthletesForInvestigator, getAthleteDetailsByAthleteId, reportAthleteById } from "../controllers/athleteController.js";

athleteRouter.get("/get-all-athletes", getAllAthletes);
athleteRouter.post("/get-all-athletes-for-investigaor", getAllAthletesForInvestigator);
athleteRouter.post("/get-athlete-details-by-id", getAthleteDetailsByAthleteId);
athleteRouter.post("/report-athlete-by-id", reportAthleteById);

export default athleteRouter;
