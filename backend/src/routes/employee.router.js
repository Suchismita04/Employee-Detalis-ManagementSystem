
import { Router } from "express";
import { logInUser} from "../controller/employee.controller.js";

const router = Router();
router.route("/logIn").post(logInUser)