import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import tweetsRouter from "./routes/tweets.js";
import morgan from "morgan";

//ENV VARIABLES
dotenv.config();

mongoose.connect(process.env.ATLAS_URI);

const app = express();
const port = process.env.PORT || 4000;
app.use(morgan("dev"));

app.use(cors());
app.use(express.json());

app.use("/api/v1/tweets", tweetsRouter);

app.get("/api/v1/", (req, res) => {
    try {
        res.send("Welcome to the API");
    } catch (error) {
        res.status(500).send("Error calling AI API");
    }
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
