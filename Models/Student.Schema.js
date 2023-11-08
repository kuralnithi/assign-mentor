import mongoose from 'mongoose';

const StudentSchema = mongoose.Schema({
  StudentName: String,
  Subject: String,
  Mentor: mongoose.Schema.Types.ObjectId
});

const StudentModel = mongoose.model('StudentModel', StudentSchema);

export default StudentModel;
