import { Router } from 'express';
import {saveQuestion, showQinfo} from '../controller/saveQuestion.controller.js'

const router = Router();

// Route to get all topics
router.route('/saveQuestion').post( saveQuestion);
router.route("/showQinfo").post(showQinfo)



export default router;