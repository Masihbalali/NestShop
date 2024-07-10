// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { SongsModule } from './songs/songs.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import Songs from './entities/songs.entity';


// @Module({
//   imports: [TypeOrmModule.forRoot({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "postgres",
//     database: "postgres",
//     entities: [__dirname + '/**/*.entity{.ts,.js}'],
//     synchronize: true
//   }),
//   TypeOrmModule.forFeature([Songs]),
//     SongsModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule { }
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import Songs from './entities/songs.entity';

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
    TypeOrmModule.forFeature([Songs]),
    SongsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
