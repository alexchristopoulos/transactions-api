import {
  createAccountController,
  getAccountController,
  getAccountsSummaryController,
} from 'controllers';
import { Router } from 'express';

const router: Router = Router();

router.get('/', getAccountsSummaryController);
router.get('/:id', getAccountController);
router.post('/', createAccountController);

export { router as accountRouter };
