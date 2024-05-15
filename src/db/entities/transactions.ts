import 'reflect-metadata';

import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Account } from './account';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id!: number;

  @Column({ type: 'bigint' })
  @OneToOne(() => Account)
  sourceAccount!: number;

  @Column({ type: 'bigint' })
  @OneToOne(() => Account)
  targetAccount!: number;

  @Column({ type: 'number' })
  amount!: number;

  @Column({ type: 'string' })
  currency!: Date;
}
