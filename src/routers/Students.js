import StudentController from '../Controllers/StudentController';
import express from 'express';
const router = express.Router();
router.post('/student/create', StudentController.regesterStudent);
export default router;