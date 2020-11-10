export const getAll = `select * from class where status = "1"`;
export const getById = `select * from class where classid = $1 and status ="1" `;
//get all class in a given level
export const getByLevel = `select * from class where levelId = $1 and status = "1"`;
export const create = `insert into class(classname,teacherid,levelid) values($1,$2,$3)`;
export const update = `update table class set classname = $1,teacherid = $2 where classid = $3`;
export const deleteClass = `update class set status = "0" where classid = $1 `;
export const deletePem = `delete from class where classid =$1`;
export const getByClassTeacher = `select * from class where teacherid =$1`;