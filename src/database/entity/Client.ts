import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Address from './Address';

@Entity('clients')
class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'decimal', nullable: false, unique: true,
  })
  cpf: number;

  @Column({
    type: 'text', nullable: false,
  })
  name: string;

  @Column({
    type: 'decimal', nullable: false,
  })
  phone: number;

  @Column({
    type: 'text', nullable: false,
  })
  email: string;

  @OneToOne(() => Address) @JoinColumn()
  address: Address;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Client;