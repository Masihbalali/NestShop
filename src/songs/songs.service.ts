import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {

    private readonly songs = [];

    create(song) {
        this.songs.push(song)
        return this.songs
    }

    findAll() {
        return this.songs
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
