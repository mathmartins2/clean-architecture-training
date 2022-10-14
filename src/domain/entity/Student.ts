export default class Student {
    constructor(readonly name: string, readonly email: string, readonly cpf: string, readonly birthDate: Date) {
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.birthDate = birthDate;
    }
}