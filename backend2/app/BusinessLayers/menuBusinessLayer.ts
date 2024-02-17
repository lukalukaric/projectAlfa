import { getConnection } from "typeorm";
import { MenuDTO } from "../DTOs/MenuDTO";
import { MenuItemDTO } from "../DTOs/MenuItemDTO";
import { Menu } from "../Entities/Menu";

export class MenuBusinessLayer {
    public static async getMenu(): Promise<MenuDTO> {
        let connection = getConnection();
        let menuRepository = connection.getRepository(Menu);

        let menu = await menuRepository.findOne({ where: { id: 1 }, relations: ["menuItems"] });
        if (menu === null || menu === undefined)
            return new MenuDTO(undefined);

        let menuDto = new MenuDTO(menu.menuName);
        if (menu.menuItems !== null && menu.menuItems !== undefined && menu.menuItems.length > 0) {
            for (let i of menu.menuItems) {
                menuDto.items.push(new MenuItemDTO(i.name, i.url));
            }
        }

        return menuDto;
    }
}