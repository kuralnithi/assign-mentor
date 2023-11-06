import MentorModel from '../Models/Mentor.Schema.js';
import StudentModel from '../Models/Student.Schema.js';

export const createMentor = async (req, res) => {
  try {
    const mentorDetails = await MentorModel.create(req.body);
     console.log(mentorDetails);
     await mentorDetails.save();

    res.status(201).json({ message: 'Mentor created successfully', data: mentorDetails });
  } catch (error) {
    console.error('Error creating mentor:', error);
    res.status(500).json({ message: 'Error in creating mentor', error });
  }
};

// Get Mentor List
export const getMentorList = async (req, res) => {
  try {
    const mentors = await MentorModel.find();
    res.status(200).json({ message: 'Mentor list fetched successfully', data: mentors });
  } catch (error) {
    console.error('Error listing mentors:', error);
    res.status(500).json({ message: 'Error in listing mentors', error });
  }
};

// Assign Student to Mentor
export const assignStudentToMentor = async (req, res) => {
  const { StudentName, MentorName } = req.body;
  try {
    const mentor = await MentorModel.findOne({MentorName:MentorName});
    const student = await StudentModel.findOneAndUpdate({StudentName:StudentName},{$set :{ Mentor:`ObjectId(${mentor._id})` }}, { new: true });
    res.status(200).json({ message: 'Student assigned to mentor successfully', data: student });
  } catch (error) {
    console.error('Error assigning student to mentor:', error);
    res.status(500).json({ message: 'Error in assigning student to mentor', error });
  }
};

// Get Students for a Particular Mentor
export const getStudentsForMentor = async (req, res) => {
  const {MentorName}= req.body;
  try {
    const students = await StudentModel.aggregate([
      {
        $match: { Mentor: MentorName },
      },
      {
        $lookup: {
          from: "MentorModel",
          localField: "Mentor",
          foreignField: "_id",
          as: "mentorInfo",
        },
      },
      {
        $project: {
          _id: 1,
          StudentName: 1,
          Subject: 1,
          mentor: { $arrayElemAt: ["$mentorInfo", 0] },
        },
      },
    ]);
    console.log("students",students);

   res.status(200).json({ message: 'Students for mentor fetched successfully', data: [...students] });
  } catch (error) {
    console.error('Error fetching students for mentor:', error);
    res.status(500).json({ message: 'Error in fetching students for mentor', error });
  }
};
