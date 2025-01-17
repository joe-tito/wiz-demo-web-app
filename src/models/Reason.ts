import mongoose from "mongoose";

export interface Reasons extends mongoose.Document {
  reason: string;
}

const ReasonSchema = new mongoose.Schema<Reasons>({
  reason: {
    type: String
  },
});

export default mongoose.models.Reason || mongoose.model<Reasons>("Reason", ReasonSchema);