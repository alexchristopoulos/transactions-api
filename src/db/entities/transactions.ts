import 'reflect-metadata';

import { Check, Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Account } from './account';

@Entity()
@Check('"amount" > 0')
export class Transaction {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    type: "uuid"
  })
  @OneToOne(() => Account, (account => account.id))
  sourceAccount!: string;


  @Column({
    type: "uuid"
  })
  @OneToOne(() => Account, (account => account.id))
  targetAccount!: string;

  @Column({ type: "bigint" })
  amount!: number;
}
