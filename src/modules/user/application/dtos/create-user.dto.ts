import { UserRoleEnum } from "../../domain/entity/user.types";
import { Address } from "../../domain/value-objects/address.value-object";

export interface CreateUserDTO {
  email: string;
  password: string;
  name: string;
  address: Address;
  role?: UserRoleEnum;
}
