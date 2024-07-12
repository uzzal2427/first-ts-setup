import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherPhoneNo: string;
  motherName: string;
  motherOccupation: string;
  motherPhoneNo: string;
};

export type Student = {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  dateOfBirth: string;
  gender: 'male' | 'female';
  bloodGroup: 'A+' | 'B+' | 'AB+' | 'O+';
  email: string;
  mobileNo: string;
  parents: Guardian;
};
