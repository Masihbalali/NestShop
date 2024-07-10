import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { error } from 'console';
import Songs from 'src/entities/songs.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SongsService {
    constructor(
        @InjectRepository(Songs)
        private readonly song_repository: Repository<Songs>
    ) { }

    private readonly songs = [];

    create = async (song) => {
        const newSong = await this.song_repository.create({
            title: song.title,
            artists: song.artists,
            // releasedDate: song.releasedDate,
            // duratiuon: song.duratiuon
        })
        this.song_repository.save(newSong)
        // this.songs.push(song)
        // return this.songs

    }

    findAll = async () => {
        return await this.song_repository.find()
        // throw new error
        // return this.songse
    }

    findOne(id) {
        for (let i = 0; i < this.songs.length; i++) {
            if (id === this.songs[i]) {
                return (`${id} is the ${i} in db`)
            }
        }
        return (`${id} is not finding`)

    }

}
