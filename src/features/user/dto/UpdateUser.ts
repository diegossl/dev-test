import { IsEmail, IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator'

export class UpdateUser {
  @IsOptional({ message: 'email/optional-field' })
  @IsNotEmpty({ message: 'email/is-missing' })
  @IsEmail({}, { message: 'email/invalid-format' })
  email?: string

  @IsOptional({ message: 'password/optional-field' })
  @IsNotEmpty({ message: 'password/is-missing' })
  @MaxLength(30, { message: 'password/too-long' })
  @MinLength(6, { message: 'password/too-short' })
  password?: string
}