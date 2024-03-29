import express from 'express';
import "./data-source";
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

export { app };