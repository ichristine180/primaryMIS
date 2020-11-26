export const getAll = ``;
export const create=`INSERT INTO points(
	levelid, subjectname, catone, cattwo, exam, studentid, teacherid)
    VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    export const update =`UPDATE points
	SET catone=$1, cattwo=$2, exam=$3
    WHERE levelid = $4 and subjectname = $5 and studentid =$6`;
    export const addCatTwoPoint = `UPDATE points
	SET cattwo=$1
    WHERE levelid = $2 and subjectname = $3 and studentid =$4`;
    export const addExamPoint = `UPDATE points
	SET exam=$1
    WHERE levelid = $2 and subjectname = $3 and studentid =$4`;

    export const getBysubjects =`SELECT subjects.levelid, subjects.subjectname, catone, cattwo, exam, students.studentid, teacherid,catMax,examMax,studentNames,levelName
    FROM points inner join students 
    on students.studentid = points.studentid 
    inner join subjects 
    on subjects.subjectname = points.subjectname 
    and subjects.levelid 
    =points.levelid 
    inner join levels 
    on levels.levelid 
    = points.levelid 
    WHERE points.levelid 
    = $1 and points.subjectname = $2`;

    export const getByStudent = `SELECT subjects.levelid, subjects.subjectname, catone, cattwo, exam, students.studentid, teacherid,catMax,examMax,studentNames,levelName
    FROM points inner join students 
    on students.studentid = points.studentid 
    inner join subjects 
    on subjects.subjectname = points.subjectname 
    and subjects.levelid 
    =points.levelid 
    inner join levels 
    on levels.levelid 
    = points.levelid 
    WHERE points.studentid 
    = $1`;
    export const getByClass = `SELECT subjects.levelid, subjects.subjectname, catone, cattwo, exam, st.studentid, teacherid,catMax,examMax,studentNames,levelName,classid
    FROM points inner join students as st
    on st.studentid = points.studentid inner join student_class as sc on st.studentid = sc.studentid
    inner join subjects 
    on subjects.subjectname = points.subjectname 
    and subjects.levelid 
    =points.levelid 
    inner join levels 
    on levels.levelid 
    = points.levelid 
   WHERE sc.classid = $1`