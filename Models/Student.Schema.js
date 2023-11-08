import mongoose from 'mongoose';

const StudentSchema = mongoose.Schema({
  StudentName: String,
  Subject: String,
  Mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'mentormodels' // Replace 'MentorModel' with the actual name of the mentor collection
  }
});

const StudentModel = mongoose.model('StudentModel', StudentSchema);

export default StudentModel;
