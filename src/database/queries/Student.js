export const create = `INSERT INTO students(
	studentnames, parentsemail, parentsphonenumber, status)
	VALUES ($1, $2, $3, $4);`
export const update = `UPDATE students
	SET studentnames=$1, parentsemail=$2, parentsphonenumber=$3, status=$4
	WHERE studentid = $5`;
export const createStudentLevel = `INSERT INTO student_level(
		studentid, levelid, year)
		VALUES ($1, $2, $3);`
export const deleteStudent = `UPDATE students
		SET status=$1
		WHERE studentid = $2`;
export const deleteRecord = `delete from student where studentid = $1`;

export const getAll =`select * from students where status = "1"`;
export const getOne = `select * from students where studentid = $1`;
export const getByLevel = `select studentid, studentnames, parentsemail, 
parentsphonenumber, 
status,levelid, year 
from students inner join 
student_level on students.studentid 
= student_level.studentid where student_level.levelid 
= $1 and students.status 
= "1" and student_level.year =$2`;


