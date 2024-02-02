import express from "express";
import { feedback } from "../Controllers/productfeedback.controller.js";

const router = express.Router();

// http://localhost:3000/productfeedback/feedback
router.post("/feedback", feedback);

export default router;