import Athletes from "../models/athleteModel.js";
import AthleteDetails from "../models/athleteDetailsModel.js";

const getAllAthletes = async (req, res) => {
  try {
    const allAthletes = await Athletes.find();
    if (allAthletes) {
      res.send(allAthletes);
    } else {
      res.send( "No Athletes to fetch");
    }
  } catch (error) {
    res.status(400).send({ message: "Something went wrong"});
  }
};

const getAthleteDetailsByAthleteId = async (req, res) => {
  const {athleteId} = req.body; 
  try {
    const athleteDetails = await AthleteDetails.findOne({ athlete_id: athleteId });
    if (!athleteDetails) {
      return res.status(404).json({ message: 'Athlete not found' });
    }
      return res.status(200).json(athleteDetails);
  } catch (error) {
      console.error('Error fetching athlete details:', error);
      return res.status(500).json({ message: 'Internal server error' });
  }
};

const reportAthleteById = async (req, res) => {
  console.log(req.body);
  const {athleteId} = req.body; 
  try {
    const athleteDetails = await Athletes.findOne({ _id: athleteId });
    if (!athleteDetails) {
      return res.status(404).json({ message: 'Athlete not found' });
    }
      athleteDetails.isReported = true;
      await athleteDetails.save();
      return res.status(200).json("Athlete reported successfully");
  } catch (error) {
      console.error('Error reporting athlete :', error);
      return res.status(500).json({ message: 'Internal server error' });
  }
};


export {
  getAllAthletes,
  getAthleteDetailsByAthleteId,
  reportAthleteById
};
