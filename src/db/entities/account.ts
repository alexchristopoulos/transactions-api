import 'reflect-metadata';

import { Check, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@Check('"balance" >= 0')
export class Account {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: 'bigint' })
  balance!: number;

  @Column({ type: 'date' })
  createdAt!: Date;
}
