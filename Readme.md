
    API LIST

* To create a mentor(POST) - https://assign-mentor-dp46.onrender.com/api/mentors/creatementor

                        EXAMPLE : 
                                  { "MentorName": "pugal"}


* To create a student(POST) - https://assign-mentor-dp46.onrender.com/api/students/createstudent

                        EXAMPLE : 
                                    { "StudentName": "newstu5",
                                    "Subject": "fsd"}



* To get mentor list(GET) - https://assign-mentor-dp46.onrender.com/api/mentors/getmentor



* To assign or change one student to a mentor(POST) - https://assign-mentor-dp46.onrender.com/api/mentors/assign

                            EXAMPLE :
                                        {"StudentName":"newstu5","MentorName":"sathish"}    




* To assign multiple students to one mentor(POST) - https://assign-mentor-dp46.onrender.com/api/mentors/assignmultiple

                            EXAMPLE :
                                        {
                                            "MentorName":"suresh",
                                            "StudentsName":["newstu1","newstu2","newstu3","newstu4","newstu5"]
 
                                            } 


* To get student list for a mentor - https://assign-mentor-dp46.onrender.com/api/mentors/studentlist

                            EXAMPLE :
                                        {
                                        "MentorName":"sathish"
                                        }


        