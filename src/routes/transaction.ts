import { transactionController } from 'controllers/transaction';
import { Router } from 'express';

const router: Router = Router();

router.post('/', transactionController);

export { router as transactionRouter };
