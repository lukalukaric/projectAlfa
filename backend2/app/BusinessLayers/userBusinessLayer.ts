import { getConnection } from "typeorm";
import { UserDTO } from "../DTOs/UserDTO";
import { User } from "../Entities/User";

export class UserBusinessLayer {
    public static async getUsers(): Promise<UserDTO[]> {
        let connection = getConnection();
        let userRepository = connection.getRepository(User);

        let users = await userRepository.find();

        let usersDTO: UserDTO[] = [];
        for (let u of users) {
            let uDTO = new UserDTO(u.username, u.password, u.email);
            usersDTO.push(uDTO);
        }

        return usersDTO;
    }
}