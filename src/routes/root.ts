import { getAllMessages, getRoot, postMessage } from 'controllers/root';
import { IRouter, Router } from 'express';
import { validateRequest } from 'middleware/validateRequest';
import { postRootSchema } from 'utils/validation/root';

const router: IRouter = Router();

router.get('/', getRoot);
router.get('/all', getAllMessages);

router.post('/', validateRequest(postRootSchema), postMessage);

export { router };
