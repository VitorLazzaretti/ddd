import { Address } from "../value-objects/address.value-object";
import { Email } from "../value-objects/email.value-object";

export enum UserRoleEnum {
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER'
}

export type UserProps = {
  Email: Email;
  Password: string;
  Name: string;
  Address: Address;
  Role: UserRoleEnum;
}

export type CreateUserProps = {
  Email: Email;
  Password: string;
  Name: string;
  Address: Address;
  Role?: UserRoleEnum;
}