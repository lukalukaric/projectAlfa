import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId, Unique } from "typeorm";
import { Board } from "./Board";
import { BoardItem } from "./BoardItem";
import { MenuItem } from "./MenuItem";

@Entity()
export class BoardColumn {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    sortId: number;

    @ManyToOne(() => Board, board => board.columns)
    board: Board;

    @OneToMany(() => BoardItem, boardItem => boardItem.column)
    items: MenuItem[];
}
