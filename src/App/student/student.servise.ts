import { Student } from './student-interface';
import { studentModel } from './student-model';

const createStudentIntoDB = async (student: Student) => {
  const result = await studentModel.create(student);
  return result;
};

const getAllStudentDataFromDB = async () => {
  const result = await studentModel.find();
  return result;
};

const getSingleStudentData = async (id: string) => {
  const result = await studentModel.findOne({ id });
};

export const studentService = {
  createStudentIntoDB,
  getAllStudentDataFromDB,
  getSingleStudentData,
};
