export const getAll = `select *from subjects where status ='1'`;
export const getByLevel = `select * from subjects inner join levels on subjects.levelid = levels.levelid where subjects.status ='1' and levels.levelid =$1`;
export const getOne = `select *from subjects where status = '1' and subjectname = $1 and levelid= $2`;
export const asignTeacherOnSubject =`INSERT INTO subjects_teachers(
	teacherid, levelid, subjectname)
    VALUES ($1, $2, $3)`;
export const create = `INSERT INTO subjects(
        subjectname, catmax, exammax, levelid, status)
        VALUES ($1, $2, $3, $4, $5) returning *`;
export const update =`UPDATE subjects
        SET subjectname=$3, catmax=$4, exammax=$5, levelid=$6
        WHERE where subjectname = $1 and levelid =$2`;
export const hidesubjects = `UPDATE subjects
        SET status='0'
        WHERE where subjectname = $1 and levelid =$2`;
export const deleteSubject = `DELETE FROM subjects
        WHERE where subjectname = $1 and levelid =$2`;
        //retrieve all subject assigned to one teacher
export const getSubjectByTeacher = `SELECT teacherid, levelid, subjectname
        FROM subjects_teachers where teacherid = $1`