import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId, Unique } from "typeorm";
import { Board } from "./Board";
import { BoardColumn } from "./BoardColumn";

@Entity()
export class BoardItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column()
    sortId: number;

    @ManyToOne(() => Board, board => board.items)
    board: Board;

    @ManyToOne(() => BoardColumn, boardColumn => boardColumn.items)
    column: BoardColumn;
}
