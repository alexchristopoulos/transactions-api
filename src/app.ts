import 'express-async-errors';

import express, { Application } from 'express';
import { errorMiddleware, notFoundMiddleware } from 'middleware';
import { accountRouter, transactionRouter } from 'routes';

const app: Application = express();

app.use(express.json());

app.use('/account', accountRouter);
app.use('/transaction', transactionRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export { app };
