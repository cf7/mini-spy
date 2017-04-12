const app = require('../app');
const expect = require('chai').expect;
const request = require('supertest');

describe('GET /', () => {
  it('responds with a 404 and error message in json', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, { message: 'Nothing to see here' }, done);
  });
});

describe('API', () => {
  it('creates a new role', (done) => {
    request(app)
      .post('/roles')
      .send({
        name: 'administator',
        description: 'administrates',
      })
      .expect(201)
      .end((error, response) => {
        if (error) {
          return done(error);
        }
        console.log(response);
        return done();
      });
  });

  it('gets all roles', (done) => {
    request(app)
      .get('/roles')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((error, response) => {
        if (error) {
          return done(error);
        }
        console.log(response);
        expect(response.body).to.have.property('name');
        expect(response.body.name).to.equal('administator');
        expect(response.body).to.have.property('description');
        expect(response.body.description).to.equal('administrates');
        return done();
      });
  });

  it('creates a new staffmember account', (done) => {
    request(app)
      .post('/staffmembers')
      .send({
        username: 'staff123',
        password: 'thisisapassword',
        firstName: 'Carrie',
        lastName: 'Smith',
        roles: '',
      })
      .expect(201)
      .end((error, response) => {
        if (error) {
          return done(error);
        }
        console.log(response);
        return done();
      });
  });

  it('creates a new staffmember account', (done) => {
    request(app)
      .post('/staffmembers')
      .send({
        username: 'staff456',
        password: 'thisisapasswordagain',
        firstName: 'Ted',
        lastName: 'Greene',
        roles: '',
      })
      .expect(201)
      .end((error, response) => {
        if (error) {
          return done(error);
        }
        console.log(response);
        return done();
      });
  });

  it('gets all staffmember account information', (done) => {
    request(app)
      .get('/staffmembers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((error, response) => {
        if (error) {
          return done(error);
        }
        console.log(response);
        expect(response.body).to.have.property('firstName');
        expect(response.body.name).to.equal('Carrie');
        expect(response.body).to.have.property('lastName');
        expect(response.body.description).to.equal('Smith');
        return done();
      });
  });

  it('gets a staffmember account information by ID', (done) => {
    request(app)
      .get('/staffmembers/2')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((error, response) => {
        if (error) {
          return done(error);
        }
        console.log(response);
        expect(response.body).to.have.property('firstName');
        expect(response.body.name).to.equal('Ted');
        expect(response.body).to.have.property('lastName');
        expect(response.body.description).to.equal('Greene');
        return done();
      });
  });

  it('replaces staffmember account information by ID', (done) => {
    request(app)
      .put('/staffmembers/2')
      .send({
        username: 'staff456',
        password: 'hereisanewpassword',
        firstName: 'Ted',
        lastName: 'Greene',
        roles: '',
      })
      .expect(200)
      .end((error, response) => {
        if (error) {
          return done(error);
        }
        console.log(response);
        return done();
      });
  });
});


/*

  SQL Notes (this might be in the final):

  "inner join" or "join" - only rows that match with each other will appear in the result table
  "left join" - all rows from left table will appear regardless if they don't have a match in the right table
                (those without matches will have a NULL on the right column of the result table)
  "full join" - all rows from both the left and right table will appear in the result table
                regardless if they have matches or not


  Example:
    What is the result of this query?
    SELECT s."firstName" as staff, r.name AS role
    FROM "StaffMember" s
    LEFT JOIN "StaffMemberRole" sr on sr."staffMemberId"=s.id
    LEFT JOIN "Role" r on sr."roleId"=r.id;

*/
