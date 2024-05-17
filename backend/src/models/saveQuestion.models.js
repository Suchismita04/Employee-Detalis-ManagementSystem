import mongoose from 'mongoose'

// Define the schema for the question
const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default:'Suchismita'
    },
    topics: {
        type: [String],
        required: true
    }
});

// Create a mongoose model using the schema
const SaveQuestion = mongoose.model('SaveQuestion', questionSchema);
export  {SaveQuestion};