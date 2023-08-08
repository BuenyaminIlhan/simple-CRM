export class User {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: number;
  street: string;
  zipCode: number;
  city: string;

  /**
   * Creates a new User object.
   * @constructor
   * @param {Object} [obj] - Optional object containing user information.
   * @param {string} [obj.firstName] - The first name of the user.
   * @param {string} [obj.lastName] - The last name of the user.
   * @param {number} [obj.birthDate] - The birth date of the user (Unix timestamp).
   * @param {string} [obj.street] - The street address of the user.
   * @param {string} [obj.zipCode] - The zip code of the user's location.
   * @param {string} [obj.city] - The city where the user resides.
   */
  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.email = obj ? obj.email: '';
    this.birthDate = obj ? obj.birthDate : '';
    this.street = obj ? obj.street : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
  }

  public toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email : this.email,
      birthDate: this.birthDate,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city
    }
  }
}
