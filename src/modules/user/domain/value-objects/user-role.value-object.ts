import { DomainPrimitive, ValueObject } from "../../../../libs/ddd/value-object.base";

type UserRoleProps = string;

export class UserRole extends ValueObject<UserRoleProps> {
  protected validate(props: DomainPrimitive<UserRoleProps>): void {
    if (!this.isValidRole(props.value)) {
      throw new Error('Role is invalid');
    }
  }

  private isValidRole(role: string): boolean {
    return !!UserRole[role.toUpperCase() as keyof typeof UserRole];
  }
  
}