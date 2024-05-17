
import { asyncHandler } from '../utilities/asyncHandler.js'
import { SaveQuestion } from '../models/saveQuestion.models.js'
import { ApiError } from '../utilities/ApiError.js';

// Controller function to save a question
const saveQuestion = asyncHandler(async (req, res) => {
  try {
    // Extract data from request body
    const { question, author, topic } = req.body;
    console.log("question from controller=", question)
    console.log("topics from controller=", topic)
    console.log("author from controller=", author)
    // Create a new question instance
    const newQuestion = new SaveQuestion({
      question,
      author,
      topic
    })

    


    // Save the question to the database
    const savedQuestion = await newQuestion.save();

    res.status(201).json(savedQuestion); // Respond with the saved question
  } catch (error) {
    console.error('Error saving question:', error);
    res.status(500).json({ error: 'An error occurred while saving the question.' });
  }
});



const showQinfo=asyncHandler(async(req,res)=>{
 try {
   const showData=await SaveQuestion.find()
   console.log("res=",showData)
   res.json(showData)
   
 } catch (error) {
  throw new ApiError(500,'Server Error')
 }
})

export {
  saveQuestion,showQinfo
};