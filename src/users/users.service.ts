import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//
import { FindOneOptions, Repository } from 'typeorm';
//
import { Users } from 'src/db/entities/user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>
    ) { }

    async findAll(): Promise<Users[]> {
        return await this.userRepository.find();
    }

    async findById(id_user: number) {
        // Find user
        const options: FindOneOptions<Users> = this.findOptions(id_user);
        // Validate if the user exists
        const existingUser = await this.userRepository.findOne(options);
        if (!existingUser) {
            throw new NotFoundException('User not found');
        }
        return this.userRepository.findOne(options);
    }

    create(user: UserDto) {
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }

    async update(user: UserDto) {
        // Find user
        const options: FindOneOptions<Users> = this.findOptions(user.user_id);
        // Validate if the user exists
        const existingUser = await this.userRepository.findOne(options);
        if (!existingUser) {
            throw new NotFoundException('User not found');
        }
        // If exists, update user
        const updateUser = { ...existingUser, ...user };

        return this.userRepository.save(updateUser);
    }

    async delete(id_user: number) {
        // Find user
        const options: FindOneOptions<Users> = this.findOptions(id_user);
        // Validate if the user exists
        const existingUser = await this.userRepository.findOne(options);
        if (!existingUser) {
            throw new NotFoundException('User not found');
        }
        return this.userRepository.delete(id_user);
    }

    findOptions(id : number) : FindOneOptions<Users> {

        const options: FindOneOptions<Users> = {
            where: {
                user_id: id
            }
        }

        return options;
    }
}
