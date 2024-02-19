import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId, Unique } from "typeorm";
import { BoardColumn } from "./BoardColumn";

@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    boardName: string;

    @OneToMany(() => BoardColumn, menuItem => menuItem.board)
    columns: BoardColumn[];

    @OneToMany(() => BoardColumn, menuItem => menuItem.board)
    items: BoardColumn[];
}
