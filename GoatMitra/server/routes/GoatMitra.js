import { registerGoatMitra,loginGoatMitra } from "../controllers/GoatMitra.js";
import express from 'express';
const MitraRouter = express.Router();

MitraRouter.post('/register', registerGoatMitra);
MitraRouter.post('/login', loginGoatMitra);

export default MitraRouter;