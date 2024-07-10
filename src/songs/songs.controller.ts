import { Controller, Get, Post, Req, Delete, Put, Param, Body, HttpException, HttpStatus, ParseIntPipe, ParseArrayPipe } from '@nestjs/common';
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

    // Get all songs
    @Get()
    findAll() {
        try {
            return this.songsService.findAll();
        } catch (error) {
            throw new HttpException('server error(erro just made to check try catch, you can fix by editing the findAll() in service.ts)', HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: error

            })

        }
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
    Update(
        @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
        id: number
    ) {
        return (`This one Update song ${typeof id}`);
    }


    @Delete(':id')
    DeleteOne() {
        return 'This one Delete song';
    }

}

