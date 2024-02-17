import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId, Unique } from "typeorm";
import { MenuItem } from "./MenuItem";

@Entity()
export class Menu {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    menuName: string;

    @OneToMany(() => MenuItem, menuItem => menuItem.menu)
    menuItems: MenuItem[];
}
