import StudentRepository from "../domain/repository/StudentRepository";
import Student from "../domain/entity/Student";

export default class newStudent {
    constructor (readonly studentRepository: StudentRepository) {}

    async execute(name: string, email: string, cpf: string, birthDate: Date): Promise<void> {
        const student = new Student(name, email, cpf, birthDate);
        await this.studentRepository.save(student);
    }
}