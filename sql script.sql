-- CREATE database alphaa_math;
-- use alphaa_math;
-- CREATE TABLE Classes (
--     ClassID INT AUTO_INCREMENT PRIMARY KEY,
--     ClassName VARCHAR(100)
-- );
-- CREATE TABLE Subjects (
--     SubjectID INT AUTO_INCREMENT PRIMARY KEY,
--     SubjectName VARCHAR(100),
--     ClassID INT,
--     FOREIGN KEY (ClassID) REFERENCES Classes(ClassID)
-- );
-- CREATE TABLE Chapters (
--     ChapterID INT AUTO_INCREMENT PRIMARY KEY,
--     ChapterName VARCHAR(100),
--     SubjectID INT,
--     FOREIGN KEY (SubjectID) REFERENCES Subjects(SubjectID)
-- );
-- CREATE TABLE Exercises (
--     ExerciseID INT AUTO_INCREMENT PRIMARY KEY,
--     ExerciseName VARCHAR(250),
--     ChapterID INT,
--     FOREIGN KEY (ChapterID) REFERENCES Chapters(ChapterID)
-- );
-- CREATE TABLE Problems (
--     ProblemID INT AUTO_INCREMENT PRIMARY KEY,
--     QuestionText TEXT,
--     AnswerText TEXT,
--     ExerciseID INT,
--     FOREIGN KEY (ExerciseID) REFERENCES Exercises(ExerciseID)
-- );

-- INSERT INTO Classes (ClassName) VALUES ('12th Standard'),('11th Standard'),('10th Standard');

-- INSERT INTO Subjects (SubjectName, ClassID) VALUES ('Mathematics', 1),('Mathematics', 2),('Mathematics', 3);

-- INSERT INTO Chapters (ChapterName, SubjectID)VALUES ('Chapter 1 Applications of Matrices and Determinants', 1),('Chapter 2 Complex Numbers', 1),('Chapter 3 Theory of Equations', 1),('Chapter 4 Inverse Trigonometric Functions',1);

-- INSERT INTO Exercises (ExerciseName, ChapterID)VALUES ('Chapter 1 Applications of Matrices and Determinants Excercise 1.1', 1),('Chapter 1 Applications of Matrices and Determinants Excercise 1.2', 1),('Chapter 1 Applications of Matrices and Determinants Excercise 1.3', 1);

-- INSERT INTO Problems (QuestionText, AnswerText, ExerciseID)VALUES ('Solve for x: 2x + 3 = 9', 'x = 3', 1),('State Newton''s First Law of Motion.', 'An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.', 1),('What is the basic principle of genetics according to Mendel?', 'Principle of Segregation: alleles segregate randomly during gamete formation and each gamete receives one allele.', 1);       
--        
-- SELECT * FROM Classes;
-- SELECT * FROM Subjects;
-- SELECT * FROM Chapters;
-- SELECT * FROM Exercises;
-- SELECT * FROM Problems;