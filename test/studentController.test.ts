import axios from 'axios';

const student = {
    name: 'João',
    email: 'email',
    cpf: '12345678',
    birthDate: '2000-01-01'
}

test('deve cadastrar um aluno', async () => {
    const response = await axios.post('http://localhost:3000/new-student', student);
    expect(response.data).toBe('Aluno criado com sucesso');
});

test('não deve cadastrar um aluno', async () => {
    const response = await axios.post('http://localhost:3000/new-student', {});
    expect(response.data.status).toBe(400);
});

test('deve buscar alunos cadastrados', async () => {
    const response = await axios.get('http://localhost:3000/students');
    expect(response.data).toContainEqual(student);
});

