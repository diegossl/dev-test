import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { Extract } from 'src/models/Extract.entity'
import { Account } from 'src/models/Account.entity'
import { CreateUser, UserParams } from './dto'
import { User } from 'src/models/User.entity'
import { UserService } from './user.service'

@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService) {}
  
  @Get('/:id')
  async balance (@Param() params: UserParams): Promise<Account> {
    return await this.userService.balance(params)
  }

  @Get('/:id')
  async extract (@Param() params: UserParams): Promise<Extract> {
    return await this.userService.extract(params)
  }

  @Post()
  async register (@Body() data: CreateUser): Promise<User> {
    return await this.userService.register(data)
  }

}
