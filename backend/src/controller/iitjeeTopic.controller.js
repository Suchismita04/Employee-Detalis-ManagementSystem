
import {asyncHandler}  from '../utilities/asyncHandler.js'
import { Topic } from '../models/iitJeeTopics.models.js';

// Get all topics
export const getTopics =asyncHandler( async (req, res) => {
  try {
    const topics = await Topic.find();
    console.log("Sample=",topics)
    res.status(200).json(topics);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving topics', error: err });
  }
});

// Get default topics
export const getDefaultTopics =asyncHandler( async (req, res) => {
  try {
    const defaultTopics = await Topic.find({ name: { $in: ['Physics', 'Chemistry', 'Mathematics'] } });
    console.log("sample:",defaultTopics)
    res.status(200).json(defaultTopics);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving default topics', error: err });
  }
});