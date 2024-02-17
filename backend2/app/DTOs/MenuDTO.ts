import { MenuItemDTO } from "./MenuItemDTO";

export class MenuDTO {
    constructor(name?: string) {
        this.name = name || undefined;
        this.items = [];
    }
    public name: string | undefined;
    public items: MenuItemDTO[];
}