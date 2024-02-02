import express from "express";
import { addCategory, searchCategory } from "../Controllers/category.controller.js";

const router = express.Router();

// http://localhost:3000/category/addCategory
router.post("/addCategory", addCategory);

// http://localhost:3000/category/searchCategory
router.get("/searchCategory", searchCategory);

export default router;