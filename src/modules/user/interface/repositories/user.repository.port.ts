import { RepositoryPort } from "../../../../libs/ddd/repository.port.base";
import { UserEntity } from "../../domain/entity/user.entity";

export interface UserRepositoryPort extends RepositoryPort<UserEntity> {
  findOneByEmail(email: string): Promise<UserEntity | null>;
}