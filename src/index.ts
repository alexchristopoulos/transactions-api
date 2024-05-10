import { app } from 'app';
import { config } from 'config';
import { createServer } from 'http';

const port = config.SERVER_PORT;

const server = createServer(app);

server.listen(port);

server.on('listening', () => console.log(`Listening at port ${port}`));

export default server;
