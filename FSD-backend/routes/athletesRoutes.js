import express from "express";
const athleteRouter = express.Router();

import { getAllAthletes } from "../controllers/athleteController.js";

athleteRouter.get("/get-all-athletes", getAllAthletes)

export default athleteRouter;
