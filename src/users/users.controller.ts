import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get('/:id_user')
    findById(@Param('id_user', ParseIntPipe) id_user: number) {
        return this.usersService.findById(id_user);
    }

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() user: UserDto) {
        return this.usersService.create(user);
    }

    @Put()
    @UsePipes(ValidationPipe)
    update(@Body() user: UserDto) {
        return this.usersService.update(user);
    }

    @Delete('/:id_user')
    delete(@Param('id_user', ParseIntPipe) id_user: number) {
        return this.usersService.delete(id_user);
    }
}