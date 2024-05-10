import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Account } from './account';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  // @ts-expect-error ignore ts error
  id: number;

  @Column({ type: 'bigint' })
  @OneToOne(() => Account)
  // @ts-expect-error ignore ts error
  sourceAccount: number;

  @Column({ type: 'bigint' })
  @OneToOne(() => Account)
  // @ts-expect-error ignore ts error
  targetAccount: number;

  @Column({ type: "number" })
  // @ts-expect-error ignore ts error
  amount: number;

  @Column({ type: 'string' })
  // @ts-expect-error ignore ts error
  currency: Date;
}
