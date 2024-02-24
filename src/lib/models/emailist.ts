import mongoose, { Document, Schema } from 'mongoose';

export interface EmailTypes extends Document {
  email: string;
}

const EmailList = new Schema<EmailTypes>({
  email: { type: String, required: true, unique: true },
}, {timestamps:true});

const EmailListInstance = mongoose.models.EmailList || mongoose.model<EmailTypes>('EmailList', EmailList);

export default EmailListInstance;
