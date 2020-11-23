import StudentController from '../Controllers/StudentController';
import express from 'express';
import Student from '../middleware/Students';
import Students from '../middleware/Students';
import Auth from '../middleware/Auth';
const router = express.Router();
router.post('/student/create',Auth.verifyToken, Student.checkStudent, StudentController.regesterStudent);
router.put('/student/update/:id',Auth.verifyToken,Auth.notTeacher, Students.checkExist,StudentController.updateStudent);
export default router;