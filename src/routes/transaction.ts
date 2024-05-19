import {
  getTransactionsController,
  transactionController,
} from 'controllers/transaction';
import { Router } from 'express';

const router: Router = Router();

router.get('/', getTransactionsController);
router.post('/', transactionController);

export { router as transactionRouter };
