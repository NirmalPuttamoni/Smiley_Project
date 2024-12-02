import mongoose from "mongoose";

const athleteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sport: { type: String, required: true },
  description: { type: Number, required: true },
  image: { type: String, required: true },
});

export default mongoose.model("athletes", athleteSchema);