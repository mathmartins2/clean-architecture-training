import StudentRepository from "../domain/repository/StudentRepository";
import Student from "../domain/entity/Student";

export default class getStudents {
    constructor (readonly studentRepository: StudentRepository) {}

    async execute(): Promise<Student[]> {
        return await this.studentRepository.getStudentList();
    }
}