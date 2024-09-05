import { Entity, BaseEntity, PrimaryColumn, Column, Generated, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity('users')
export class User {
  @PrimaryColumn({ type: "uuid" })
  @Generated("uuid")
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  password: string;
  
  @Column({ type: 'boolean'})
  verify: boolean

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;
}