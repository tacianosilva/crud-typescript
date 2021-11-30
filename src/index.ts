import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import morgan from 'morgan';
import { useRoutes } from './routes';

const PORT = process.env.PORT || 8091;

const app: Application = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

useRoutes(app);

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}.`)
});