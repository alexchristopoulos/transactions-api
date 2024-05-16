import { Account } from 'db/entities/account';
import { Transaction } from 'db/entities/transactions';
import { DataSource } from 'typeorm';

export const datasource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5435,
  username: 'bank',
  password: 'bank',
  database: 'bank',
  synchronize: true,
  logging: true,
  entities: [Account, Transaction],
});
