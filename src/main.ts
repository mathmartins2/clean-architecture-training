import StudentRepositoryMemory from "./infra/controller/repository/memory/studentRepositoryMemory";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import NewStudent from "./application/NewStudent";
import GetStudents from "./application/GetStudents";
import StudentController from "./infra/controller/StudentController";

const studentRepository = new StudentRepositoryMemory();
const newStudent = new NewStudent(studentRepository);
const getStudents = new GetStudents(studentRepository);
const httpServer = new ExpressAdapter();
new StudentController(httpServer, newStudent, getStudents);
httpServer.listen(3000);