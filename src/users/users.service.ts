import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Users from 'src/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly user_repository: Repository<Users>
    ) { }

    createUser = async (user) => {
        try {
            const newUser = await this.user_repository.create({
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                password: user.password
            })
            this.user_repository.save(newUser)
        } catch (error) {
            throw error
        }
    }


    findAll = async () => {
        return await this.user_repository.find()
    }

}
