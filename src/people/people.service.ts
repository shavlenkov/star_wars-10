import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { People } from './people.entity';

import {CreatePeopleDto} from "./create-people.dto";

@Injectable()
export class PeopleService {
    constructor(
        @InjectRepository(People)
        private peopleRepository: Repository<People>,
    ) {}

    getAll(): Promise<People[]> {
        return this.peopleRepository.find();
    }

    getOne(id: number): Promise<People> {
        return this.peopleRepository.findOneBy({ id });
    }

    store(data: CreatePeopleDto) {
        return this.peopleRepository.save(data);
    }

    delete(id: number) {
        this.peopleRepository.delete(id);

        return 'ok';

    }


}
