import  express from 'express';

import { registerGoatPalak,getGoatPalak,registerGoatPalaks,getGoatPalakByarea } from "../controllers/GoatPalak.js";

const PalakRouter = express.Router();

PalakRouter.post('/register', registerGoatPalak);
PalakRouter.get('/', getGoatPalak);
PalakRouter.post('/registers', registerGoatPalaks);
PalakRouter.post('/getByarea', getGoatPalakByarea);

export default PalakRouter;
