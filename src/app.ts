import 'express-async-errors';

import { transactionController } from 'controllers/transaction';
import express, { Application } from 'express';
import { errorMiddleware } from 'middleware/errorMiddleware';
import { notFoundMiddleware } from 'middleware/notFoundMiddleware';

import { accountRouter } from './routes';

const app: Application = express();

app.use(express.json());

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.use('/account', accountRouter);
app.use('/transaction', transactionController);

export { app };
