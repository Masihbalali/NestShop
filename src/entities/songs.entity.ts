import { IsMilitaryTime } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("songs")
export default class Songs {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 50, nullable: false })
    title: string

    @Column({ length: 50, nullable: false })
    artists: string

    // @Column({ nullable: false })
    // releasedDate: Date

    // @Column({ nullable: false })
    // duratiuon: Date

}