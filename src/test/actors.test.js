const supertest = require('supertest');
const app = require('../app');

describe('actors HTTP GET requests', function () {
  it('/marvel-actors should have status code 200', function (done) {
    supertest(app)
      .get('/api/v1/marvel-actors')
      .expect(200)
      .end(function (err, response) {
        if (err) return done(err);

        done();
      });
  });

  it('/marvel-actors-multiple-characters should have status code 200', function (done) {
    supertest(app)
      .get('/api/v1/marvel-actors-multiple-characters')
      .expect(200)
      .end(function (err, response) {
        if (err) return done(err);

        done();
      });
  });
});
