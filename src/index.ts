import 'reflect-metadata';

import { app } from 'app';
import { config } from 'config';
import { datasource } from 'db/dataSource';
import { createServer } from 'http';

const port = config.SERVER_PORT;

const server = createServer(app);

server.listen(port);

server.on('listening', () => console.log(`Listening at port ${port}`));

datasource
  .initialize()
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.error('failed to connect to db', err);
    process.exit(1);
  });

export default server;
