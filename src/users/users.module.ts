import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/db/entitiies';

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UsersService]
})
export class UsersModule {}
