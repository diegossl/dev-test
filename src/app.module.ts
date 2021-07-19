import { ConfigModule, ConfigService } from '@nestjs/config'
import { UserController, UserModule } from './features/user'
import { TypeOrmModule } from '@nestjs/typeorm'
import databaseConfig from './config/database'
import { Module } from '@nestjs/common'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    UserModule,
  ],
  controllers: [UserController]
})
export class AppModule {}
