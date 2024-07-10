import { Controller, Get, Post, Req, Delete, Put, Param, Body } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-songs-dto';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) { }

    // @Post(":id")
    // create(
    //     @Param('id')
    //     id: string
    // ) {
    //     return this.songsService.create(id);
    // }
    @Post()
    create(@Body() CreateSongDTO: CreateSongDTO) {
        return this.songsService.create(CreateSongDTO);
    }


    @Get()
    findAll() {
        return this.songsService.findAll();
    }

    @Get(":id")
    findOne(
        @Param('id')
        id
    ) {
        return this.songsService.findOne(id);
    }

    @Put(':id')
    Update() {
        return 'This one Update song';
    }
    @Delete(':id')
    DeleteOne() {
        return 'This one Delete song';
    }

}

