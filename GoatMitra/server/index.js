import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import ConnectDB from './db/index.js';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import MitraRouter from './routes/GoatMitra.js';
import GoatRouter from './routes/Goats.js';
import PalakRouter from './routes/GoatPalak.js';

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/mitra', MitraRouter);
app.use('/goat', GoatRouter);
app.use('/palak', PalakRouter);

ConnectDB().then(() => {
    app.listen(5000, () => {
        console.log("Server is running on port 5000");
    });
}).catch((error) => {
    console.log("Error in connecting to MongoDB", error);
});


