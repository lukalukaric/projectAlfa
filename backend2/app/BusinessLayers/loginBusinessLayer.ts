import { getConnection } from "typeorm";
import { MessageResponseDTO } from "../DTOs/Common/MessageResponseDTO";
import { LoginDTO } from "../DTOs/LoginDTO";
import { User } from "../Entities/User";

export class LoginBusinessLayer {
    public static async doLogin(data: LoginDTO): Promise<MessageResponseDTO> {
        let connection = getConnection();
        let userRepository = connection.getRepository(User);

        if (data.username === null || data.username === undefined || data.username === "")
            return { Success: false, Message: "Invalid username" };

        if (data.password === null || data.password === undefined || data.password === "")
            return { Success: false, Message: "Invalid password" };

        let user = await userRepository.findOne({ where: { username: data.username, password: data.password } });

        if (user === null || user === undefined)
            return { Success: false, Message: "User does not exist" };

        return { Success: true };
    }
}