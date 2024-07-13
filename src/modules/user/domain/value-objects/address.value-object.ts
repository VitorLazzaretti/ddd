import { ValueObject } from "../../../../libs/ddd/value-object.base";
import { Guard } from "../../../../libs/guard";

type AddressProps = {
  street: string;
  city: string;
  country: string;
  zipCode: string;
};

const MIN_LENGTH = 2;
const MAX_LENGTH = 50;

export class Address extends ValueObject<AddressProps> {
  protected validate(props: AddressProps): void {
    if (!Guard.lengthIsBetween(props.street, MIN_LENGTH, MAX_LENGTH)) {
      throw new Error('Street is invalid');
    }

    if (!Guard.lengthIsBetween(props.city, MIN_LENGTH, MAX_LENGTH)) {
      throw new Error('City is invalid');
    }

    if (!Guard.lengthIsBetween(props.country, MIN_LENGTH, MAX_LENGTH)) {
      throw new Error('Country is invalid');
    }

    if (!Guard.lengthIsBetween(props.zipCode, MIN_LENGTH, MAX_LENGTH)) {
      throw new Error('Zip code is invalid');
    }
  }
}