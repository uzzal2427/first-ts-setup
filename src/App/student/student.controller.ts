import { Request, Response } from 'express';
import { studentService } from './student.servise';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = await req.body;
    const result = studentService.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentDataFromDB();
    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = studentService.getSingleStudentData(studentId);
    res.status(200).json({
      success: true,
      message: "student's data got successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
