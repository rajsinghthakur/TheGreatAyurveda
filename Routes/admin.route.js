import express from "express";

import { signUp, signIn } from "../Controllers/admin.controller.js";

const router = express.Router();

// http://localhost:3000/admin/signup
router.post("/signup", signUp);

// http://localhost:3000/admin/signin
router.post("/signIn", signIn);

export default router;