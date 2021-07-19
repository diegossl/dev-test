import { IsNotEmpty, IsUUID } from 'class-validator'

export class UserParams {
  @IsNotEmpty({ message: 'id/is-missing' })
  @IsUUID('4', { message: 'id/invalid-format' })
  id!: string
}