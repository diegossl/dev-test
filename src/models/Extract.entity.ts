import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Type } from 'class-transformer'

@Entity({ name: 'extracts' })
export class Extract {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'real', nullable: false })
  value!: number

  @Column({ type: 'date', nullable: false })
  @Type(() => Date)
  date!: Date
}