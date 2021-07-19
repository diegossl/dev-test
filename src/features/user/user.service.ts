import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { Account } from 'src/models/Account.entity'
import { Extract } from 'src/models/Extract.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateUser, UserParams } from './dto'
import { User } from 'src/models/User.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {

  constructor (@InjectRepository(User) private userRepository: Repository<User>) {}

  async register (data: CreateUser): Promise<User> {
    try {
      const user = this.userRepository.create(data)
      return await this.userRepository.save(user)
    } catch {
      throw new InternalServerErrorException('user/failed-to-register')
    }
  }

  async balance (params: UserParams): Promise<Account> {
    try {
      const { id } = params
      const { account } = await this.userRepository.findOne({ id: id }, { select: ['account'] })
      return account
    } catch {
      throw new InternalServerErrorException('user/failed-to-get-balance')
    }
  }

  async extract (params: UserParams): Promise<Extract> {
    try {
      const { id } = params
      const { extract } = await this.userRepository.findOne({ id: id }, { select: ['extract'] })
      return extract
    } catch {
      throw new InternalServerErrorException('user/failed-to-get-extract')
    }
  }
  
}
