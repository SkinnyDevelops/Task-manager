import { Router } from 'express';
import authRouter from '../../features/auth/http/router.js';

const router = Router();

router.use('/auth', authRouter);

router.all('*', (req, res) => {
  res.status(404).send({ message: 'URL_INPUT_INVALID' });
});

export default router;
