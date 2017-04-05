const app = require('../app');
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
