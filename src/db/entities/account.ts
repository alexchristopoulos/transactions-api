import 'reflect-metadata';

import { Check, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@Check('"balance" >= 0')
export class Account {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id!: number;

  @Column({ type: 'number' })
  balance!: number;

  @Column({ type: 'string' })
  currency!: string;

  @Column({ type: 'string' })
  createdAt!: Date;
}
