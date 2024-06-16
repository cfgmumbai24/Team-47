import express from 'express';

import { registerGoat,getGoat,getGoatById,getPalakGoats,getVisitByGoat,getVisit,registerVisit } from '../controllers/Goats';

const GoatRouter = express.Router();

GoatRouter.post('/register', registerGoat);
GoatRouter.get('/', getGoat);
GoatRouter.get('/:id', getGoatById);
GoatRouter.get('/palak', getPalakGoats);
GoatRouter.post('/visit', registerVisit);
GoatRouter.get('/visit', getVisit);
GoatRouter.get('/visit/:id', getVisitByGoat);

export default GoatRouter;
