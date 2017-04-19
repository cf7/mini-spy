/* Get the first and last names of all staff members that are employment specialists. */
select s.first_name, s.last_name
from staff_member s
join staff_member_role sr
on s.di = sr.staff_member_id
join role r
on r.id = sr.role_id
where r.name = 'Employment Specialist';

-- or

select s.first_name, s.last_name
from staff_member s
join staff_member role sr
on s.id = sr.staff_member_id
where sr.role_id = (
	select id
	from role
	where name = ‘Employment Specialist’
);

/* Get the counts of staff managers for each role. List them in descending order by count. */
select sr.role_id, count(*) as num_employees
from staff_member_role sr
group by sr.role_id
order by num_employees desc;

/* Get all subprograms of the Arts and Creativity program. */
select children.name
from program children
join program parents
on parents.id = children.parent_id
where parents.name = 'Arts and Creativity';

-- or

select p.name
from program p
where p.parent_id = (
  select id
  from program
  where p.name = 'Arts and Creativity'
);

/*

Neo4j Queries

create (:Role {name: 'Founder', description: 'Found the organization' }),
       (:Role {name: 'CaseManager', description: 'counsels' }),
       (:Role {name: 'Director', description: 'directs' }),
       (:Role {name: 'Employment Specialist' })

create (:StaffMember {firstname: 'Mari', lastname: 'Chen', username: 'mchen' })
       (:StaffMember {firstname: 'Jim', username: 'jim' })

match (n) where id(n) = 185 delete n

match (n:StaffMember {firstname: 'Mari'}),
      (p:Role {name: 'CaseManager'})
      (h:Role {name: 'Employment Specialist'})
create (n)-[:HAS_ROLE]->(p)
       (n)-[:HAS_ROLE]->(h)

match (n)-[:HAS_ROLE]->({name: 'CaseManager'})
return n

*/
