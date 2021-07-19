import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/models/User.entity'
import { UserService } from './user.service'
import { Module } from '@nestjs/common'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [],
  exports: [TypeOrmModule, UserService]
})
export class UserModule {}
