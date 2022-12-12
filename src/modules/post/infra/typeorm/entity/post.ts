import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idAuth: number

    @Column()
    title: string

    @Column()
    subTitle: string

    @Column("text")
    description: string

    @Column("text")
    content: string

    @Column()
    isPublished: string
}