import mongoose from 'mongoose';

const StudentSchema = mongoose.Schema({
  StudentName: String,
  Subject: String,
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MentorModel' // Replace 'MentorModel' with the actual name of the mentor collection
  }
});

const StudentModel = mongoose.model('StudentModel', StudentSchema);

export default StudentModel;
