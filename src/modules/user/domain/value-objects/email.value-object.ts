import { DomainPrimitive, ValueObject } from "../../../../libs/ddd/value-object.base";

type EmailProps = string;

export class Email extends ValueObject<EmailProps> {
  protected validate(props: DomainPrimitive<string>): void {
    if (!this.isEmail(props.value)) {
      throw new Error('Email is invalid');
    }
  }

  private isEmail(email: string): boolean {
    return /(.+)@(.+){2,}\.(.+){2,}/.test(email);
  }
}