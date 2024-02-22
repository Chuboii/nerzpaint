import mongoose, { Document, Schema } from 'mongoose';

export interface EmailTypes extends Document {
  email: string;
}

const EmailList = new Schema<EmailTypes>({
  email: { type: String, required: true },
}, {timestamps:true});

const EmaiListInstance = mongoose.models.EmailList || mongoose.model<EmailTypes>('EmailList', EmailList);

export default EmaiListInstance;
