import express from "express";
import { addProduct, removeProduct, updateProduct, viewAllProduct, viewParticularProducts } from "../Controllers/product.controller.js";

import multer from "multer";

const upload = multer({ dest: "public/images/" });

const router = express.Router();

// http://localhost:3000/product/addProduct
router.post("/addProduct", upload.single("imageUrl"), addProduct);

// http://localhost:3000/product/removeProduct
router.delete("/removeProduct", removeProduct);

// http://localhost:3000/product/updateProduct
router.put("/updateProduct", upload.single("imageUrl"), updateProduct);

// http://localhost:3000/product/viewAllProduct
router.get("/viewAllProduct", viewAllProduct);

// http://localhost:3000/product/viewParticularProducts
router.get("/viewParticularProducts", viewParticularProducts);

export default router;