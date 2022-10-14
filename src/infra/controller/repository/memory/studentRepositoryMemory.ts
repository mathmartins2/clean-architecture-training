import StudentRepository from "../../../../domain/repository/StudentRepository";
import Student from "../../../../domain/entity/Student";

export default class StudentRepositoryMemory implements StudentRepository {
    students: Student[];

    constructor() {
        this.students = [];
    }

    async save(student: Student): Promise<void> {
        this.students.push(student);
    }

    async getStudentList(): Promise<Student[]> {
        return this.students;
    }
}