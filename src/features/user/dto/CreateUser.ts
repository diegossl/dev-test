import { IsNotEmpty, IsEmail, MaxLength, MinLength } from 'class-validator'

export class CreateUser {
  @IsNotEmpty({ message: 'email/is-missing' })
  cpf!: number

  @IsNotEmpty({ message: 'email/is-missing' })
  @IsEmail({}, { message: 'email/invalid-format' })
  email!: string

  @IsNotEmpty({ message: 'password/is-missing' })
  @MaxLength(30, { message: 'password/too-long' })
  @MinLength(6, { message: 'password/too-short' })
  password!: string
}