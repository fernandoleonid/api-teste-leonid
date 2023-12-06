const request = require('supertest')
const app = request('http://localhost:8080')

describe('Teste de INTEGRAÇÃO da API', () => {
    test('Deve buscar todos os usuários', async ()=>{
        const response = await app.get('/usuarios')

        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
    })

    test('Deve criar um novo usuário', async () => {
        const novoUsuario = {
            nome: 'TesteUsuario',
            email: 'testeusuario@gmail.com'
        }

        const response = await app.post('/usuarios').send(novoUsuario)

        expect(response.status).toBe(201)
        expect(response.body.nome).toBe(novoUsuario.nome)
    }) 

} )