import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user-dto';

@Controller('users')
export class UsersController {
    constructor(private UsersService: UsersService) { }

    @Post()
    createUser(@Body() CreateUserDTO: CreateUserDTO) {
        return this.UsersService.createUser(CreateUserDTO);
    }


    @Get()
    fingAll() {
        return this.UsersService.findAll();
    }
}

