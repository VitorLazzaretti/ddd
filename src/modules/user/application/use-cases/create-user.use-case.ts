import { UseCase } from "../../../../libs/ddd/use-case.base";
import { UserEntity } from "../../domain/entity/user.entity";
import { UserRoleEnum } from "../../domain/entity/user.types";
import { Email } from "../../domain/value-objects/email.value-object";
import { UserRepositoryPort } from "../../interface/repositories/user.repository.port";
import { CreateUserDTO } from "../dtos/create-user.dto";

export class CreateUserUseCase implements UseCase<CreateUserDTO, UserEntity> {
  constructor(
    private readonly userRepository: UserRepositoryPort
  ) { }

  async execute(user: {}, data: CreateUserDTO): Promise<UserEntity> {
    const newUser = UserEntity.create({
      Address: data.address,
      Email: new Email({ value: data.email }),
      Name: data.name,
      Password: data.password,
      Role: data.role || UserRoleEnum.ADMIN
    });

    await this.userRepository.insert(newUser);
    return newUser;
  }
}