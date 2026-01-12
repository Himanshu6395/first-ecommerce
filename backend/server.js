import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from "./routes/AdminRoute.js"
import productRoutes from "./routes/ProductRoutes.js"
dotenv.config();
connectDB();

const app=express();
app.use(express.json());
app.use(cors());
console.log("ENV CHECK ---->");
console.log("AWS_ACCESS_KEY_ID:", process.env.AWS_ACCESS_KEY_ID);
console.log("AWS_SECRET_ACCESS_KEY exists:", !!process.env.AWS_SECRET_ACCESS_KEY);
console.log("AWS_REGION:", process.env.AWS_REGION);
console.log("S3_BUCKET:", process.env.AWS_BUCKET_NAME);

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use('/api/auth',authRoutes);

// admin
app.use("/api/admin", adminRoutes);
app.use("/api/Products", productRoutes);

// app.use("/api/products", productRoutes);
const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});