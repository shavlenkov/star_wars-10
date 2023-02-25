import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class People {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}