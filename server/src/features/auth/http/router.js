import { Router } from 'express';
import registerUser from '../controllers/registerUser.js';

const router = Router();

router.post('/', registerUser);
export default router;
