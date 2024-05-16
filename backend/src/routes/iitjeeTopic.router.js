import { Router } from 'express';
import { getTopics, getDefaultTopics } from '../controller/iitjeeTopic.controller.js';

const router = Router();

// Route to get all topics
router.route('/topics').post( getTopics);

// Route to get default topics
router.route('/topics/default').post( getDefaultTopics);

export default router;