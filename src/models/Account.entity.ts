import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { AccountType } from 'src/common/enums/AccountType'

@Entity({ name: 'accounts' })
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'real', nullable: false })
  balance!: number

  @Column({ type: 'enum', enum: AccountType ,nullable: false })
  type!: AccountType
}