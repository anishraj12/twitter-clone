import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;



app.use("/api/auth", authRoutes);


app.listen(PORT, () => {

    console.log(`server is running at port ${PORT}`);
    connectMongoDB();

})