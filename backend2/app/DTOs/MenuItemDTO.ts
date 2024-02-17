export class MenuItemDTO {
    constructor(name?: string, url?: string) {
        this.name = name || undefined;
        this.url = url || undefined;
    }
    public name: string | undefined;
    public url: string | undefined;
}