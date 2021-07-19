import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { Account } from './Account.entity'
import { Extract } from './Extract.entity'

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'integer', length: 11, unique: true, nullable: false })
  cpf!: number

  @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
  email!: string

  @Column({ type: 'varchar', length: 30, nullable: false })
  password!: string

  @OneToOne(() => Account, { cascade: true, nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  account!: Account

  @OneToOne(() => Extract, { cascade: true, nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  extract?: Extract
}