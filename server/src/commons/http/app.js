import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { v4 as uuid } from 'uuid';
import admin from 'firebase-admin';
import config from '../../config.js';

const { API_VERSION } = config.server;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '200kb' }));
app.use(express.urlencoded({ extended: true }));

// firebase app initialization
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: config.firebase.PROJECT_ID,
    clientEmail: config.firebase.CLIENT_EMAIL,
    privateKey: config.firebase.PRIVATE_KEY.replace(/\\n/g, '\n'),
  }),
});

// creates an unique id for each server request
app.use((req, res, next) => {
  req.idQuery = uuid();
  next();
});

app.set('PREFIX', `/${API_VERSION}`);
app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

export default app;
