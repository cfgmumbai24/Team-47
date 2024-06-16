import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import ConnectDB from './db/index.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

ConnectDB().then(() => {
    app.listen(5000, () => {
        console.log("Server is running on port 5000");
    });
}).catch((error) => {
    console.log("Error in connecting to MongoDB", error);
});


