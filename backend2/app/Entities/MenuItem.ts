import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId, Unique } from "typeorm";
import { Menu } from "./Menu";

@Entity()
export class MenuItem {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Menu, menu => menu.menuItems)
    menu: Menu;

    @Column()
    name: string;

    @Column()
    url: string;
}
