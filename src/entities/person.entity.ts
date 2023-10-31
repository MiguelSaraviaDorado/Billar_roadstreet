//import
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { user_billar } from './user_billar.entity';

//export
@Entity('person')
export class person{
    @PrimaryGeneratedColumn('identity') id_person: number;

    @Column('int') dni: number;
    
    @Column('varchar', {length: 20, nullable:false}) name_person: string;

    @Column('varchar', {length: 30}) last_name: string;

    @Column('date') date_person: Date;

    @Column('int') cellphone: number;

    @OneToMany(() => user_billar, rperson => rperson.r_person) ruser:user_billar[];
}