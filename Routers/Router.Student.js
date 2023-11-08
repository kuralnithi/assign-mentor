import express from 'express';
import { createStudent, getStudentList } from '../Controllers/Student.Controller.js';

const router = express.Router();

router.post('/createstudent', createStudent);
router.get('/studentlist', getStudentList);

export default router;
