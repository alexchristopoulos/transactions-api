import { Request, Response } from 'express';
import pino, { StreamEntry } from 'pino';
import { pinoHttp } from 'pino-http';

const streams: Array<StreamEntry> = [
  {
    stream: process.stdout,
    level: 'info',
  },
  {
    stream: process.stderr,
    level: 'error',
  },
];

const logger = pino(
  {
    timestamp: true,
    name: undefined,
  },
  pino.multistream(streams),
);

const loggerMiddleware = pinoHttp({
  logger: logger,
  serializers: {
    req: (req: Request) => ({
      method: req.method,
      url: req.url,
      headers: req.headers,
      body: req.body as unknown,
    }),
    res: (res: Response) => ({
      status: res.statusCode,
    }),
  },
});

export { logger, loggerMiddleware };
