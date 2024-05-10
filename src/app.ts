import 'express-async-errors';

import express, { Application } from 'express';
import { errorMiddleware } from 'middleware/errorMiddleware';
import { notFoundMiddleware } from 'middleware/notFoundMiddleware';

const app: Application = express();

app.use(express.json());

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export { app };
