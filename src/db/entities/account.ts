import { Check, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@Check('constraint.account.balance', '"balance" >= 0')
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'bigint' })
  balance!: number;
}
