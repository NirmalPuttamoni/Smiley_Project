import express from "express";
const athleteRouter = express.Router();

import { getAllAthletes, getAthleteDetailsByAthleteId } from "../controllers/athleteController.js";

athleteRouter.get("/get-all-athletes", getAllAthletes);
athleteRouter.post("/get-athlete-details-by-id", getAthleteDetailsByAthleteId);

export default athleteRouter;
