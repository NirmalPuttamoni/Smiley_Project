import mongoose from "mongoose";

const athleteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sport: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  isReported: {type: Boolean, required: false, default:false}
});

export default mongoose.model("athletes", athleteSchema);