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

  it('shoud return a user', async (done) => {
    const res = await request(app).get('/api/users/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user');
    if (res.body.user.length > 0) {
      expect(res.body.user).toHaveProperty('id');
      expect(res.body.user).toHaveProperty('firstName');
      expect(res.body.user).toHaveProperty('lastName');
      expect(res.body.user).toHaveProperty('email');
      expect(res.body.user).toHaveProperty('password');
      expect(res.body.user).toHaveProperty('createdAt');
      expect(res.body.user).toHaveProperty('updatedAt');
      expect(res.body.user).toHaveProperty('Items');
    }
    done();
  });
});
