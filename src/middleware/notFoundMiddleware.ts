import { NotFoundError } from 'utils/errors/NotFoundError';

export const notFoundMiddleware = () => {
  throw new NotFoundError('Resource not found', 'NotFound');
};
