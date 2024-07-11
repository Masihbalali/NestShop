import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { UsersModule } from './users/users.module';
import Songs from './entities/songs.entity';
import Users from './entities/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres', // Replace with the correct password
      database: 'postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],

      // entities: [Songs],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Songs, Users]),
    SongsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
