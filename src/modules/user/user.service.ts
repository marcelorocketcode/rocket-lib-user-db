import { Repository } from "typeorm";

import { User as UserEntity } from "@database/models/user.model";
import { AppDataSource } from "@database/config/connection";

import { CreateUserPayload, User } from "./user.interface";

export class UserService {
  userRepository: Repository<UserEntity>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(UserEntity);
  }

  /**
   * This method validate if the user exist in the central database
   *
   * @param uuid - User identifier, uuid pattern
   * @returns Returns true if user exist in otherwise false.
   *
   */
  async verifyUser(uuid: string): Promise<Boolean> {
    return this.userRepository.findOne({ where: { id: uuid }})
      .then((user) => !!user)
  }

  /**
   * Create user in base CreateUserPayload
   *
   * @param {CreateUserPayload} user - User schema
   * @returns Returns user payload
   *
   */
  async create(user: CreateUserPayload): Promise<User> {
    const schema = this.userRepository.create({
      ...user,
      verify: false,
    });
    const newUser = await this.userRepository.save(schema);

    const { password, ...userAccess } = newUser;

    return userAccess;
  }
}