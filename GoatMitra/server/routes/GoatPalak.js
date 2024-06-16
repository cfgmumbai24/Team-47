import  express from 'express';

import { registerGoatPalak,getGoatPalak } from "../controllers/GoatPalak";

const PalakRouter = express.Router();

PalakRouter.post('/register', registerGoatPalak);
PalakRouter.get('/', getGoatPalak);

export default PalakRouter;
