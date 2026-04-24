import { faker } from "@faker-js/faker";

export class FakerUtils {
    static getFullName(): string {
        return faker.person.fullName();
    }
    static getFirstName(): string {
        return faker.person.firstName();
    }
    static getLastName(): string {
        return faker.person.lastName();
    }
    static getEmail(): string {
        return faker.internet.email().toLowerCase();
    }
    static getPassword(length: number = 10): string {
        return faker.internet.password({
            length,
            memorable: false
        });
    }
    static getMobileNumber(): string {
        return faker.string.numeric(10);
    }
    static getAddress(): string {
        return faker.location.streetAddress();
    }
    static getCity(): string {
        return faker.location.city();
    }
    static getState(): string {
        return faker.location.state();
    }
    static getZipCode(): string {
        return faker.location.zipCode();
    }
    static getCountry(): string {
        return faker.location.country();
    }
    static generateRegistrationUser() {
        return {
            firstName: this.getFirstName(),
            lastName: this.getLastName(),
            email: this.getEmail(),
            password: this.getPassword(),
            mobileNumber: this.getMobileNumber(),
            address: this.getAddress(),
            city: this.getCity(),
            state: this.getState(),
            zipcode: this.getZipCode(),
            country: this.getCountry()
        };
    }
}