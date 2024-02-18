export class MessageResponseDTO {
    constructor(success: boolean, message?: string) {
        this.Success = success;
        this.Message = message || undefined;
    }
    public Success: boolean;
    public Message?: string | undefined;
}