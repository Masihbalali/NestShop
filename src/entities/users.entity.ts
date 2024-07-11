import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity("users")
export default class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    @PrimaryColumn()
    email: string

    @Column({ select: false })
    password: string


}