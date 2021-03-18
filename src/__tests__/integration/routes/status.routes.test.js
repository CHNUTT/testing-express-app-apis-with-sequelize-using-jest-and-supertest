const request = require('supertest');
const app = require('../../../server');

describe('Test /status', () => {
  it('should return Ok', async (done) => {
    const res = await request(app).get('/status');
    expect(res.text).toBe('Ok');
    done();
  });
});
