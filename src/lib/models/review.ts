import mongoose, { Document, Schema } from 'mongoose';

export interface ReviewTypes extends Document {
  name: string;
    photoUrl: string;
    review: string;
}

const ReviewSchema = new Schema<ReviewTypes>({
  name: { type: String, required: true },
  photoUrl: { type: String, required: true },
  review: { type: String, required: true },
}, {timestamps: true});

// Create a model based on the schema
const ReviewInstance = mongoose.models.Reviews || mongoose.model<ReviewTypes>('Reviews', ReviewSchema);

export default ReviewInstance;
