export class UserDTO {
    constructor(username?: string, password?: string, email?: string) {
        this.username = username || undefined;
        this.password = password || undefined;
        this.email = email || undefined;
    }

    public username: string | undefined;
    public password: string | undefined;
    public email: string | undefined;
}