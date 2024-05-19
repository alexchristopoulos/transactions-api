import { createAccountController, getAccountController } from 'controllers';
import { Router } from 'express';
import { getAccountsSummary } from 'services/account';

const router: Router = Router();

router.get('/', getAccountsSummary);
router.get('/:id', getAccountController);
router.post('/', createAccountController);

export { router as accountRouter };
