import { Account } from 'db/entities/account';
import { Transaction } from 'db/entities/transactions';
import { DataSource } from 'typeorm';

export const datasource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5455,
  username: 'typeorm',
  password: 'typeorm',
  database: 'typeorm',
  synchronize: true,
  logging: true,
  entities: [Account, Transaction],
});
