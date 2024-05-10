import { app } from 'app';
import { config } from 'config';
import { createServer } from 'http';
import { logger } from 'utils/logger';

const port = config.SERVER_PORT;

const server = createServer(app);

server.listen(port);

server.on('listening', () =>
  logger.info(`Server listening at: http://localhost:${port}`),
);

export default server;
