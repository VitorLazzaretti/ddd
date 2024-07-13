import { DatabaseRepositoryBase } from "../../../../libs/db/db.repository.base";
import { UserEntity } from "../../domain/entity/user.entity";
import { UserRepositoryPort } from "./user.repository.port";

export class UserRepository
  extends DatabaseRepositoryBase<UserEntity, any>
  implements UserRepositoryPort {

  async findOneByEmail(email: string) {
    return null;
  }
}