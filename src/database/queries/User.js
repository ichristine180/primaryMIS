export const getAll = `SELECT names, email, phonenumber, role, password, status
FROM users where status="1"`;
export const getByEmail = `select names,email,
phonenumber,role,password,status from users where email =$1 and status = '1' `;
export const getByRole  = `select names,email,phonenumber,role,password,status from users where role =$1 and status = $2`;
export const getById = `SELECT names, email, phonenumber, role, password, status
FROM users where status="1" and userid = $1`;

export const getuserDetails = `SELECT *
FROM subjects_teachers inner join subjects on subjects_teachers.subjectid = subjects.subjectid inner join users on subjects_teachers.teacherid = users.userid where users.userid =$1 and users.status = "1"`;
export const create =`INSERT INTO users(
	names, email, phonenumber, role, password, status, registereddate)
	VALUES ($1, $2, $3, $4, $5, $6, $7) returning *`;