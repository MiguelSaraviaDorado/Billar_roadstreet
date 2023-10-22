//IMPORT
import { Column, Entity, IntegerType, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { person } from './person.entity';
import { reserve } from './reserve.entity';

//EXPORT
@Entity()
export class user {
    @PrimaryGeneratedColumn('identity') iduser: IntegerType;

    @Column('varchar', {length:15, nullable:false}) name_user: string;

    @Column('varchar', {length:20, nullable:false}) password: string;

    @Column('char', {length:3, nullable:false}) rol: string;

    @ManyToOne( () => person, (tperson) => tperson.truser) ruser:person;
    
    @OneToMany(() => reserve, (tbill) => tbill.rbill) rruser: reserve[];
}