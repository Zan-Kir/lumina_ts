import express from 'express';
import userRoutes from './routes/user';
import cors from 'cors';

const app = express();

    app.use(cors({
        origin: "type-script-express.vercel.app"
    }));

app.use("/api/v1", userRoutes);

app.listen(3000, () =>{
    console.info(`Server is running at Port 3000`);
});