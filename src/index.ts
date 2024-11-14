import express from 'express';
import cors from 'cors';
import connectDB from './config/database';
import authRoutes from './routes/userRoutes';
import dotenv from 'dotenv';
import { VercelRequest, VercelResponse } from '@vercel/node';

dotenv.config();

const app = express();

app.use(cors({
  origin: `${process.env.VITE_FRONTEND_URL}` 
}));

connectDB();

app.use(express.json());
app.use('/api/auth', authRoutes);


export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};
