import express from "express";
import bodyParser from "body-parser";
import AdminRouter from "./Routes/admin.route.js";
import CategoryRouter from "./Routes/category.route.js";
import ProductRouter from "./Routes/product.route.js";
import ProductFeedbackRouter from "./Routes/productfeedback.route.js";

import path from 'path';
import { fileURLToPath } from "url";

const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(dirname, "public")));

app.use("/admin", AdminRouter);
app.use("/category", CategoryRouter);
app.use("/product", ProductRouter);
app.use("/productfeedback", ProductFeedbackRouter);

app.listen(3000, () => { console.log("Server Started.....") });