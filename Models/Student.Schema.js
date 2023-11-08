import mongoose from 'mongoose';

const StudentSchema = mongoose.Schema({
  StudentName: String,
  Subject: String,
  mentor: String
});

const StudentModel = mongoose.model('StudentModel', StudentSchema);

export default StudentModel;
