import { Check, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@Check('"balance" >= 0')
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'bigint' })
  balance!: number;
}
