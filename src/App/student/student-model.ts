import { Schema, model, connect } from 'mongoose';
import { Student } from './student-interface';

const studentSchema = new Schema<Student>({
  id: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  dateOfBirth: { type: String },
  gender: ['male', 'female'],
  bloodGroup: ['A+', 'B+', 'AB+', 'O+'],
  email: { type: String, required: true },
  mobileNo: { type: String, required: true },
  parents: {
    fatherName: {
      type: String,
    },
    fatherOccupation: {
      type: String,
    },
    fatherPhoneNo: {
      type: String,
    },
    motherName: {
      type: String,
    },
    motherOccupation: {
      type: String,
    },
    motherPhoneNo: {
      type: String,
    },
  },
});

export const studentModel = model<Student>('student', studentSchema);
