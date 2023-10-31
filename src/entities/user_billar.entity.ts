//import
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { person } from './person.entity';

//export
@Entity('user_billar')
export class user_billar{
    @PrimaryGeneratedColumn('identity') id_user: number;

    @Column('varchar', {length: 15, nullable:false}) name_user: string;

    @Column('varchar', {length: 20, nullable:false})password_user: string;

    @Column('char', {length: 3}) rol: string;

    @ManyToOne(() => person, r_user => r_user.ruser) r_person: string;
}