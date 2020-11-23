export const create = `INSERT INTO students(
	studentnames, parentsemail, parentsphonenumber,regestrationNumber,RegisteredDate,status)
	VALUES ($1, $2, $3, $4,$5,$6) returning *`;
export const update = `UPDATE students
	SET studentnames=$1, parentsemail=$2, parentsphonenumber=$3
	WHERE studentid = $4 returning *`;
export const createStudentLevel = `INSERT INTO student_level(
		studentid, levelid, year)
		VALUES ($1, $2, $3)`;
export const deleteStudent = `UPDATE students
		SET status=$1
		WHERE studentid = $2`;
export const deleteRecord = `delete from student where studentid = $1`;

export const getAll =`select * from students where status = "1"`;
export const getOne = `select * from students where studentid = $1`;
export const getByLevel = `select students.studentid, studentnames, parentsemail, 
parentsphonenumber, 
status,levelid, year 
from students inner join 
student_level on students.studentid 
= student_level.studentid where student_level.levelid 
= $1 and students.status 
= "1" and student_level.year =$2`;
export const createStudentClass =`INSERT INTO student_class(
	studentid, classid, year)
	VALUES ($1, $2, $3)`;

	export const getAllByClass = `select students.studentid, studentnames, parentsemail, 
	parentsphonenumber, 
	status,classid, year 
	from students inner join 
	student_class on students.studentid 
	= student_class.studentid where student_class.classid 
	= $1 and students.status 
	= "1" and student_class.year =$2`;

// check student exist in database
export const checkStudentExist = `select * from students where studentnames = $1 and parentsphonenumber = $2`;
export const checkExistOnUpdate = `select * from students where studentnames = $1 and parentsphonenumber = $2 and studentid != $3`