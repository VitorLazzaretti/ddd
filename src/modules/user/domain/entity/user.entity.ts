import { Entity } from "../../../../libs/ddd/entity.base";
import { CreateUserProps, UserProps, UserRoleEnum } from "./user.types";
import { randomUUID } from 'crypto';

export class UserEntity extends Entity<UserProps> {

  static create(create: CreateUserProps): UserEntity {
    const id = randomUUID();
    const props: UserProps = {
      ...create,
      Role: create?.Role || UserRoleEnum.MEMBER,
    };

    const user = new UserEntity({ id, props });
    return user;
  }

  public validate(): void {
    return;
  }
}
