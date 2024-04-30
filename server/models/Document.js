import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const DocumentSchema = new Schema(
  {
    data: {
      type: Object,
      required: true
    },
    authorId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true 
  }
);

const Document = model('Document', DocumentSchema);
export default Document;
