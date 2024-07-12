import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRouter } from './App/student/student.router';

const app: Application = express();

//parser

app.use(express.json());
app.use(cors());

// post api

app.use('/api/v1/student', studentRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

export default app;
