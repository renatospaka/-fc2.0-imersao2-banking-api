// eslint-disable-next-line prettier/prettier
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity({
  name: 'pix_keys',
})
export class PixKey {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  kind: string;

  @Column()
  key: string;

  @Column()
  bank_account_id: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @BeforeInsert()
  generateId() {
    if (this.id) return;
    this.id = uuidv4();
  }
}
