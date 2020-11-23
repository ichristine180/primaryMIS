import StudentController from '../Controllers/StudentController';
import express from 'express';
import Student from '../middleware/Students';
const router = express.Router();
router.post('/student/create', Student.checkStudent, StudentController.regesterStudent);
export default router;