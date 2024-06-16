import express from 'express';

import { registerGoat,getGoat,getGoatById,getPalakGoats,getVisitByGoat,getVisit,registerVisit,registerGoats,registerVisits } from '../controllers/Goats.js';

const GoatRouter = express.Router();

GoatRouter.post('/register', registerGoat);
GoatRouter.get('/', getGoat);
GoatRouter.get('/:id', getGoatById);
GoatRouter.get('/palak/:id', getPalakGoats);
GoatRouter.post('/visit', registerVisit);
GoatRouter.get('/visit', getVisit);
GoatRouter.get('/visit/:id', getVisitByGoat);
GoatRouter.post('/registers', registerGoats);
GoatRouter.post('/registervisits', registerVisits);

export default GoatRouter;
