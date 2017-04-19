/* Get the first and last names of all staff members that are employment specialists. */
select s.first_name, s.last_name
from staff_member s
join staff_member_role sr
on s.di = sr.staff_member_id
join role r
on r.id = sr.role_id
where r.name = 'Employment Specialist';

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
