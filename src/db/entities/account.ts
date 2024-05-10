import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  // @ts-expect-error ignore ts error
  id: number;

  @Column({ type: 'number' })
  // @ts-expect-error ignore ts error
  balance: number;

  @Column()
  // @ts-expect-error ignore ts error
  currency: string;

  @Column()
  // @ts-expect-error ignore ts error
  createdAt: Date;
}
