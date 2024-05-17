import {
  createAccountController,
  getAccountController,
} from 'controllers/account';
import { Router } from 'express';

const router: Router = Router();

router.get('/', getAccountController);
router.post('/', createAccountController);

export { router as accountRouter };
