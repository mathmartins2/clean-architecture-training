import Student from "../entity/Student";

export default interface StudentRepository {
    save(student: Student): Promise<void>;
    getStudentList(): Promise<Student[]>;
}