import NewStudent from "../../application/NewStudent";
import GetStudents from "../../application/GetStudents";
import HttpServer from "../http/HttpServer";

export default class StudentController {
    constructor(
        readonly httpServer: HttpServer, 
        readonly newStudent: NewStudent,
        readonly getStudents: GetStudents
    ) {
        this.httpServer.on('post', '/new-student', async (params: any, body: any) => {
            const { name, email, cpf, birthDate } = body;
            if(!name || !email || !cpf || !birthDate) return { status: 400, body: 'Missing param' };
            await newStudent.execute(name, email, cpf, birthDate);
            return 'Aluno criado com sucesso';
        });

        this.httpServer.on('get', '/students', async (params: any, body: any) => {
            return await getStudents.execute();
        });
    }
}

