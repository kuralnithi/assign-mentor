import mongoose from 'mongoose';

const StudentSchema = mongoose.Schema({
  StudentName: String,
  Subject: String,
  Mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'mentormodels'
  }
});

const StudentModel = mongoose.model('StudentModel', StudentSchema);

export default StudentModel;
