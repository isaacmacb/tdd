const supertest = require('supertest');

const request = supertest('http://localhost:3001')


test('deve responder na porta 3001', () => {
    request.get('/')
    .then(res => expect(res.status).toBe(200))
})

    