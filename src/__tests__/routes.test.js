const request = require('supertest');
let app = require('../server');

describe('User API', () => {
  it('should return all users', async (done) => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('users');
    if (res.body.users.length > 0) {
      expect(res.body.users[0]).toHaveProperty('id');
      expect(res.body.users[0]).toHaveProperty('firstName');
      expect(res.body.users[0]).toHaveProperty('lastName');
      expect(res.body.users[0]).toHaveProperty('email');
      expect(res.body.users[0]).toHaveProperty('password');
      expect(res.body.users[0]).toHaveProperty('createdAt');
      expect(res.body.users[0]).toHaveProperty('updatedAt');
      expect(res.body.users[0]).not.toHaveProperty('Items');
    }
    done();
  });
});
