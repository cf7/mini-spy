/* eslint-disable no-unused-vars */
const app = require('../app');
const expect = require('chai').expect;
const request = require('supertest');

function postRequest(url, payload) {
  return request(app).post(url).send(payload);
}

describe('GET /', () => {
  it('responds with a 404 and error message in json', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, { message: 'Nothing to see here' }, done);
  });
});

describe('API Role Endpoints', () => {
  beforeEach((done) => {
    request(app).delete('/roles').end(done);
  });

  it('create a new role', () => {
    return request(app)
      .post('/roles')
      .send({
        name: 'administator',
        description: 'administrates',
      })
      .expect(201)
      .then((response) => {

      });
  });

  it('get all roles', () => {
    const url = '/roles';
    return postRequest(url, { name: 'administator', description: 'administrates' }).expect(201)
      .then(() => postRequest(url, { name: 'staff', description: 'staffs' }).expect(201))
      .then(() => postRequest(url, { name: 'volunteer', description: 'volunteers' }).expect(201))
      .then(() => request(app).get('/roles').expect(200))
      .then((response) => {
        expect(response.body.length).to.equal(3);
        expect(response.body[0].name).to.equal('administator');
        expect(response.body[0].description).to.equal('administrates');
        expect(response.body[1].name).to.equal('staff');
        expect(response.body[1].description).to.equal('staffs');
        expect(response.body[2].name).to.equal('volunteer');
        expect(response.body[2].description).to.equal('volunteers');
      });
  });
});

describe('API StaffMember Endpoints', () => {
  beforeEach((done) => {
    request(app).delete('/staffmembers').end(done);
  });

  it('create a new staffmember account', () => {
    return request(app)
      .post('/staffmembers')
      .send({
        username: 'staff123',
        password: 'thisisapassword',
        firstName: 'Carrie',
        lastName: 'Smith',
      })
      .expect(201)
      .then((response) => {

      });
  });

  it('get all staffmember account information', () => {
    const url = '/staffmembers';
    return postRequest(url, { username: 'staff123', password: 'thisisapassword', firstName: 'Carrie', lastName: 'Smith' }).expect(201)
      .then(() => postRequest(url, { username: 'newstaff', password: 'thisisapassword1', firstName: 'Kathy', lastName: 'Jones' }).expect(201))
      .then(() => postRequest(url, { username: 'staffer', password: 'thisisapassword2', firstName: 'Ted', lastName: 'Greene' }).expect(201))
      .then(() => request(app).get('/staffmembers').expect(200))
      .then((response) => {
        expect(response.body.length).to.equal(3);
        expect(response.body[0].username).to.have.property('staff123');
        expect(response.body[0].password).to.equal('thisisapassword');
        expect(response.body[0].firstName).to.have.property('Carrie');
        expect(response.body[0].lastName).to.equal('Smith');
        expect(response.body[1].username).to.have.property('newstaff');
        expect(response.body[1].password).to.equal('thisisapassword1');
        expect(response.body[1].firstName).to.have.property('Kathy');
        expect(response.body[1].lastName).to.equal('Jones');
        expect(response.body[2].username).to.have.property('staffer');
        expect(response.body[2].password).to.equal('thisisapassword2');
        expect(response.body[2].firstName).to.have.property('Ted');
        expect(response.body[2].lastName).to.equal('Greene');
      });
  });

  it('get a staffmember account information by ID', () => {
    return request(app)
      .get('/staffmembers/2')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.have.property('firstName');
        expect(response.body.name).to.equal('Ted');
        expect(response.body).to.have.property('lastName');
        expect(response.body.description).to.equal('Greene');
      });
  });

  it('replace staffmember account information by ID', () => {
    return request(app)
      .put('/staffmembers/2')
      .send({
        username: 'staff456',
        password: 'hereisanewpassword',
        firstName: 'Ted',
        lastName: 'Greene',
        roles: '',
      })
      .expect(200)
      .then((response) => {

      });
  });
});

describe('API Case Note endpoints', () => {
  beforeEach((done) => {
    request(app).delete('/casenotes').end(done);
  });

  it('create a case note', () => {
    let url = '/staffmembers';
    return postRequest(url, { username: 'staff123', password: 'thisisapassword', firstName: 'Carrie', lastName: 'Smith' }).expect(201)
      .then(() => postRequest(url, { username: 'staff456', password: 'thisisapassword1', firstName: 'John', lastName: 'Doe' }).expect(201))
      .then(() => postRequest('/casenotes', { date: new Date(), content: 'This is a sample case note. Usually, this is a larger body of text.', author: 1 }).expect(201))
      .then(() => postRequest('/casenotes', { date: new Date(), content: 'This is another sample case note.', author: 2 }).expect(201));
  });

  it('edit case notes', () => {
    return postRequest('/casenotes', { date: new Date(), content: 'This is a sample case note. This is a body of text.', author: 1 }).expect(201)
      .then(() => postRequest('/casenotes', { date: new Date(), content: 'This is another sample case note.', author: 2 }).expect(201))
      .then(() => {
        request(app)
          .put('/casenotes/1')
          .send({
            content: 'This is a sample case note. This is a larger body of text with more content.'
          }).expect(200);
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
