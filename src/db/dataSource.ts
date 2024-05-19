import { config } from 'config';
import { Account, Transaction } from 'db/entities';
import { DataSource } from 'typeorm';

const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_SYNC, DB_USERNAME } = config;

export const datasource = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: DB_PORT as number,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: DB_SYNC as boolean,
  logging: true,
  entities: [Account, Transaction],
});
