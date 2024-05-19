import { createAccountController, getAccountController } from 'controllers';
import { Router } from 'express';

const router: Router = Router();

router.get('/:id', getAccountController);
router.post('/', createAccountController);

export { router as accountRouter };
