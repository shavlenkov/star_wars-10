import { Module } from '@nestjs/common';;

import { ConfigModule } from '@nestjs/config';
import {PeopleModule} from "./people/people.module";
import { TypeOrmModule } from '@nestjs/typeorm';

import {People} from './people/people.entity'

@Module({
  imports: [PeopleModule, ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    entities: [People],
    synchronize: true,
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
