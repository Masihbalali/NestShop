import { Injectable } from '@nestjs/common';
import { error } from 'console';

@Injectable()
export class SongsService {

    private readonly songs = [];

    create(song) {
        this.songs.push(song)
        return this.songs
    }

    findAll() {
        throw new error
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
