import { registerGoatMitra,loginGoatMitra } from "../controllers/GoatMitra";

const MitraRouter = express.Router();

MitraRouter.post('/register', registerGoatMitra);
MitraRouter.post('/login', loginGoatMitra);

export default MitraRouter;