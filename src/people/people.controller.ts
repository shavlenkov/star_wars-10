import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';

import {PeopleService} from "./people.service";
import {CreatePeopleDto} from "./create-people.dto";

@Controller('people')
export class PeopleController {
    constructor(private peopleService: PeopleService) {}

    @Get()
    index() {
        return this.peopleService.getAll();
    }

    @Get('/:id')
    show(@Param('id', ParseIntPipe) id) {
        return this.peopleService.getOne(id);
    }

    @Post()
    create(@Body() createPeopleDto: CreatePeopleDto) {
        return this.peopleService.store(createPeopleDto)
    }

    @Delete('/:id')
    remove(@Param('id', ParseIntPipe) id) {
        return this.peopleService.delete(id);
    }



}
