CREATE database alphaa_math;
use alphaa_math;
CREATE TABLE Classes (ClassID INT AUTO_INCREMENT PRIMARY KEY,ClassName VARCHAR(100));
CREATE TABLE Subjects (SubjectID INT AUTO_INCREMENT PRIMARY KEY,SubjectName VARCHAR(100),ClassID INT,FOREIGN KEY (ClassID) REFERENCES Classes(ClassID));
CREATE TABLE Chapters (ChapterID INT AUTO_INCREMENT PRIMARY KEY,ChapterName VARCHAR(100),SubjectID INT,FOREIGN KEY (SubjectID) REFERENCES Subjects(SubjectID));
CREATE TABLE Exercises (ExerciseID INT AUTO_INCREMENT PRIMARY KEY,ExerciseName VARCHAR(250),ChapterID INT,FOREIGN KEY (ChapterID) REFERENCES Chapters(ChapterID));
CREATE TABLE Problems (ProblemID INT AUTO_INCREMENT PRIMARY KEY,QuestionText TEXT,AnswerText TEXT,ExerciseID INT,FOREIGN KEY (ExerciseID) REFERENCES Exercises(ExerciseID));

INSERT INTO Classes (ClassName) VALUES ('12th Standard'),('11th Standard'),('10th Standard');
INSERT INTO Subjects (SubjectName, ClassID) VALUES ('Mathematics', 1),('Mathematics', 2),('Mathematics', 3);
INSERT INTO Chapters (ChapterName, SubjectID)VALUES ('Chapter 1 Applications of Matrices and Determinants', 1),('Chapter 2 Complex Numbers', 1),('Chapter 3 Theory of Equations', 1),('Chapter 4 Inverse Trigonometric Functions',1);
INSERT INTO Exercises (ExerciseName, ChapterID)VALUES ('Chapter 1 Applications of Matrices and Determinants Excercise 1.1', 1),('Chapter 1 Applications of Matrices and Determinants Excercise 1.2', 1),('Chapter 1 Applications of Matrices and Determinants Excercise 1.3', 1);
INSERT INTO Problems (QuestionText, AnswerText, ExerciseID)VALUES ('Solve for x: 2x + 3 = 9', 'x = 3', 1),('State Newton''s First Law of Motion.', 'An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.', 1),('What is the basic principle of genetics according to Mendel?', 'Principle of Segregation: alleles segregate randomly during gamete formation and each gamete receives one allele.', 1);       
       
-- INSERTING EXERCISES;
-- 12TH STANDARD

INSERT INTO Exercises (ExerciseName, ChapterID)VALUES ('Chapter 4 Inverse Trigonometric Functions Excercise 4.1',4),('Chapter 4 Inverse Trigonometric Functions Excercise 4.2',4),('Chapter 4 Inverse Trigonometric Functions Excercise 4.3',4),('Chapter 4 Inverse Trigonometric Functions Excercise 4.4',4),('Chapter 4 Inverse Trigonometric Functions Excercise 4.5',4),('Chapter 4 Inverse Trigonometric Functions Excercise 4.6',4);
INSERT INTO Exercises (ExerciseName, ChapterID)VALUES ('Chapter 5 Two Dimensional Analytical Geometry Exercise 5.1',5),('Chapter 5 Two Dimensional Analytical Geometry Exercise 5.2',5),('Chapter 5 Two Dimensional Analytical Geometry Exercise 5.3',5),('Chapter 5 Two Dimensional Analytical Geometry Exercise 5.4',5),('Chapter 5 Two Dimensional Analytical Geometry Exercise 5.5',5),('Chapter 5 Two Dimensional Analytical Geometry Exercise 5.6',5);
INSERT INTO Exercises (ExerciseName, ChapterID)VALUES ('Chapter 6 Applications of Vector Algebra Exercise 6.1',6),('Chapter 6 Applications of Vector Algebra Exercise 6.2',6),('Chapter 6 Applications of Vector Algebra Exercise 6.3',6),('Chapter 6 Applications of Vector Algebra Exercise 6.4',6),('Chapter 6 Applications of Vector Algebra Exercise 6.5',6),('Chapter 6 Applications of Vector Algebra Exercise 6.6',6),('Chapter 6 Applications of Vector Algebra Exercise 6.7',6),('Chapter 6 Applications of Vector Algebra Exercise 6.8',6),('Chapter 6 Applications of Vector Algebra Exercise 6.9',6),('Chapter 6 Applications of Vector Algebra Exercise 6.10',6);
INSERT INTO Exercises (ExerciseName, ChapterID)VALUES ('Chapter 7 Applications of Differential Calculus 7.1',7),('Chapter 7 Applications of Differential Calculus 7.2',7),('Chapter 7 Applications of Differential Calculus 7.3',7),('Chapter 7 Applications of Differential Calculus 7.4',7),('Chapter 7 Applications of Differential Calculus 7.5',7),('Chapter 7 Applications of Differential Calculus 7.6',7),('Chapter 7 Applications of Differential Calculus 7.7',7),('Chapter 7 Applications of Differential Calculus 7.8',7),('Chapter 7 Applications of Differential Calculus 7.9',7),('Chapter 7 Applications of Differential Calculus 7.10',7);
INSERT INTO Exercises (ExerciseName, ChapterID)VALUES ('Chapter 8 Differentials and Partial Derivative Excercise 8.1',8),('Chapter 8 Differentials and Partial Derivative Excercise 8.2',8),('Chapter 8 Differentials and Partial Derivative Excercise 8.3',8),('Chapter 8 Differentials and Partial Derivative Excercise 8.4',8),('Chapter 8 Differentials and Partial Derivative Excercise 8.5',8),('Chapter 8 Differentials and Partial Derivative Excercise 8.6',8),('Chapter 8 Differentials and Partial Derivative Excercise 8.7',8),('Chapter 8 Differentials and Partial Derivative Excercise 8.8',8),('Chapter 8 Differentials and Partial Derivative Excercise 8.9',8),('Chapter 8 Differentials and Partial Derivative Excercise 8.10',8);
INSERT INTO Exercises (ExerciseName, ChapterID) VALUES
('Chapter 9 Applications of Integration Exercise 9.1', 9),
('Chapter 9 Applications of Integration Exercise 9.2', 9),
('Chapter 9 Applications of Integration Exercise 9.3', 9),
('Chapter 9 Applications of Integration Exercise 9.4', 9),
('Chapter 9 Applications of Integration Exercise 9.5', 9),
('Chapter 9 Applications of Integration Exercise 9.6', 9),
('Chapter 9 Applications of Integration Exercise 9.7', 9),
('Chapter 9 Applications of Integration Exercise 9.8', 9),
('Chapter 9 Applications of Integration Exercise 9.9', 9),
('Chapter 10 Ordinary Differential Equations Exercise 10.1', 10),
('Chapter 10 Ordinary Differential Equations Exercise 10.2', 10),
('Chapter 10 Ordinary Differential Equations Exercise 10.3', 10),
('Chapter 10 Ordinary Differential Equations Exercise 10.4', 10),
('Chapter 10 Ordinary Differential Equations Exercise 10.5', 10),
('Chapter 10 Ordinary Differential Equations Exercise 10.6', 10),
('Chapter 10 Ordinary Differential Equations Exercise 10.7', 10),
('Chapter 10 Ordinary Differential Equations Exercise 10.8', 10),
('Chapter 10 Ordinary Differential Equations Exercise 10.9', 10),
('Chapter 11 Probability Distributions Exercise 11.1', 11),
('Chapter 11 Probability Distributions Exercise 11.2', 11),
('Chapter 11 Probability Distributions Exercise 11.3', 11),
('Chapter 11 Probability Distributions Exercise 11.4', 11),
('Chapter 11 Probability Distributions Exercise 11.5', 11),
('Chapter 11 Probability Distributions Exercise 11.6', 11),
('Chapter 12 Discrete Mathematics Exercise 12.1', 12),
('Chapter 12 Discrete Mathematics Exercise 12.2', 12),
('Chapter 12 Discrete Mathematics Exercise 12.3', 12);

-- 11TH EXERCISE INSERTION

INSERT INTO Exercises (ExerciseName, ChapterID) VALUES
('Chapter 1 Sets, Relations and Functions Exercise 1.1', 13),
('Chapter 1 Sets, Relations and Functions Exercise 1.2', 13),
('Chapter 1 Sets, Relations and Functions Exercise 1.3', 13),
('Chapter 1 Sets, Relations and Functions Exercise 1.4', 13),
('Chapter 1 Sets, Relations and Functions Exercise 1.5', 13),
('Chapter 2 Basic Algebra Exercise 2.1', 14),
('Chapter 2 Basic Algebra Exercise 2.2', 14),
('Chapter 2 Basic Algebra Exercise 2.3', 14),
('Chapter 2 Basic Algebra Exercise 2.4', 14),
('Chapter 2 Basic Algebra Exercise 2.5', 14),
('Chapter 2 Basic Algebra Exercise 2.6', 14),
('Chapter 2 Basic Algebra Exercise 2.7', 14),
('Chapter 2 Basic Algebra Exercise 2.8', 14),
('Chapter 2 Basic Algebra Exercise 2.9', 14),
('Chapter 2 Basic Algebra Exercise 2.10', 14),
('Chapter 2 Basic Algebra Exercise 2.11', 14),
('Chapter 2 Basic Algebra Exercise 2.12', 14),
('Chapter 2 Basic Algebra Exercise 2.13', 14),
('Chapter 3 Trigonometry Exercise 3.1', 15),
('Chapter 3 Trigonometry Exercise 3.2', 15),
('Chapter 3 Trigonometry Exercise 3.3', 15),
('Chapter 3 Trigonometry Exercise 3.4', 15),
('Chapter 3 Trigonometry Exercise 3.5', 15),
('Chapter 3 Trigonometry Exercise 3.6', 15),
('Chapter 3 Trigonometry Exercise 3.7', 15),
('Chapter 3 Trigonometry Exercise 3.8', 15),
('Chapter 3 Trigonometry Exercise 3.9', 15),
('Chapter 3 Trigonometry Exercise 3.10', 15),
('Chapter 3 Trigonometry Exercise 3.11', 15),
('Chapter 3 Trigonometry Exercise 3.12', 15),
('Chapter 4 Combinatorics and Mathematical Induction Exercise 4.1', 16),
('Chapter 4 Combinatorics and Mathematical Induction Exercise 4.2', 16),
('Chapter 4 Combinatorics and Mathematical Induction Exercise 4.3', 16),
('Chapter 4 Combinatorics and Mathematical Induction Exercise 4.4', 16),
('Chapter 4 Combinatorics and Mathematical Induction Exercise 4.5', 16),
('Chapter 5 Binomial Theorem, Sequences and Series Exercise 5.1', 17),
('Chapter 5 Binomial Theorem, Sequences and Series Exercise 5.2', 17),
('Chapter 5 Binomial Theorem, Sequences and Series Exercise 5.3', 17),
('Chapter 5 Binomial Theorem, Sequences and Series Exercise 5.4', 17),
('Chapter 5 Binomial Theorem, Sequences and Series Exercise 5.5', 17),
('Chapter 6 Two Dimensional Analytical Geometry Exercise 6.1', 18),
('Chapter 6 Two Dimensional Analytical Geometry Exercise 6.2', 18),
('Chapter 6 Two Dimensional Analytical Geometry Exercise 6.3', 18),
('Chapter 6 Two Dimensional Analytical Geometry Exercise 6.4', 18),
('Chapter 6 Two Dimensional Analytical Geometry Exercise 6.5', 18),
('Chapter 7 Matrices and Determinants Exercise 7.1', 19),
('Chapter 7 Matrices and Determinants Exercise 7.2', 19),
('Chapter 7 Matrices and Determinants Exercise 7.3', 19),
('Chapter 7 Matrices and Determinants Exercise 7.4', 19),
('Chapter 7 Matrices and Determinants Exercise 7.5', 19),
('Chapter 8 Vector Algebra Exercise 8.1', 20),
('Chapter 8 Vector Algebra Exercise 8.2', 20),
('Chapter 8 Vector Algebra Exercise 8.3', 20),
('Chapter 8 Vector Algebra Exercise 8.4', 20),
('Chapter 8 Vector Algebra Exercise 8.5', 20),
('Chapter 9 Differential Calculus - Limits and Continuity Exercise 9.1', 21),
('Chapter 9 Differential Calculus - Limits and Continuity Exercise 9.2', 21),
('Chapter 9 Differential Calculus - Limits and Continuity Exercise 9.3', 21),
('Chapter 9 Differential Calculus - Limits and Continuity Exercise 9.4', 21),
('Chapter 9 Differential Calculus - Limits and Continuity Exercise 9.5', 21),
('Chapter 9 Differential Calculus - Limits and Continuity Exercise 9.6', 21),
('Chapter 10 Differential Calculus - Differentiability and Methods of Differentiation Exercise 10.1', 22),
('Chapter 10 Differential Calculus - Differentiability and Methods of Differentiation Exercise 10.2', 22),
('Chapter 10 Differential Calculus - Differentiability and Methods of Differentiation Exercise 10.3', 22),
('Chapter 10 Differential Calculus - Differentiability and Methods of Differentiation Exercise 10.4', 22),
('Chapter 10 Differential Calculus - Differentiability and Methods of Differentiation Exercise 10.5', 22),
('Chapter 11 Integral Calculus Exercise 11.1', 23),
('Chapter 11 Integral Calculus Exercise 11.2', 23),
('Chapter 11 Integral Calculus Exercise 11.3', 23),
('Chapter 11 Integral Calculus Exercise 11.4', 23),
('Chapter 11 Integral Calculus Exercise 11.5', 23),
('Chapter 12 Introduction to Probability Theory Exercise 12.1', 24),
('Chapter 12 Introduction to Probability Theory Exercise 12.2', 24),
('Chapter 12 Introduction to Probability Theory Exercise 12.3', 24),
('Chapter 12 Introduction to Probability Theory Exercise 12.4', 24),
('Chapter 12 Introduction to Probability Theory Exercise 12.5', 24);

-- 10TH STANDARD EXERCISES;

INSERT INTO Exercises (ExerciseName, ChapterID) VALUES
('Chapter 1 Relations and Functions Exercise 1.1', 25),
('Chapter 1 Relations and Functions Exercise 1.2', 25),
('Chapter 1 Relations and Functions Exercise 1.3', 25),
('Chapter 1 Relations and Functions Exercise 1.4', 25),
('Chapter 1 Relations and Functions Exercise 1.5', 25),
('Chapter 1 Relations and Functions Exercise 1.6', 25),
('Chapter 2 Numbers and Sequences Exercise 2.1', 26),
('Chapter 2 Numbers and Sequences Exercise 2.2', 26),
('Chapter 2 Numbers and Sequences Exercise 2.3', 26),
('Chapter 2 Numbers and Sequences Exercise 2.4', 26),
('Chapter 2 Numbers and Sequences Exercise 2.5', 26),
('Chapter 2 Numbers and Sequences Exercise 2.6', 26),
('Chapter 2 Numbers and Sequences Exercise 2.7', 26),
('Chapter 2 Numbers and Sequences Exercise 2.8', 26),
('Chapter 2 Numbers and Sequences Exercise 2.9', 26),
('Chapter 2 Numbers and Sequences Exercise 2.10', 26),
('Chapter 3 Trigonometry Exercise 3.1', 27),
('Chapter 3 Trigonometry Exercise 3.2', 27),
('Chapter 3 Trigonometry Exercise 3.3', 27),
('Chapter 3 Trigonometry Exercise 3.4', 27),
('Chapter 3 Trigonometry Exercise 3.5', 27),
('Chapter 3 Trigonometry Exercise 3.6', 27),
('Chapter 3 Trigonometry Exercise 3.7', 27),
('Chapter 3 Trigonometry Exercise 3.8', 27),
('Chapter 3 Trigonometry Exercise 3.9', 27),
('Chapter 3 Trigonometry Exercise 3.10', 27),
('Chapter 3 Trigonometry Exercise 3.11', 27),
('Chapter 3 Trigonometry Exercise 3.12', 27),
('Chapter 3 Trigonometry Exercise 3.13', 27),
('Chapter 3 Trigonometry Exercise 3.14', 27),
('Chapter 3 Trigonometry Exercise 3.15', 27),
('Chapter 3 Trigonometry Exercise 3.16', 27),
('Chapter 3 Trigonometry Exercise 3.17', 27),
('Chapter 3 Trigonometry Exercise 3.18', 27),
('Chapter 3 Trigonometry Exercise 3.19', 27),
('Chapter 3 Trigonometry Exercise 3.20', 27),
('Chapter 4 Geometry Exercise 4.1', 28),
('Chapter 4 Geometry Exercise 4.2', 28),
('Chapter 4 Geometry Exercise 4.3', 28),
('Chapter 4 Geometry Exercise 4.4', 28),
('Chapter 4 Geometry Exercise 4.5', 28),
('Chapter 5 Coordinate Geometry Exercise 5.1', 29),
('Chapter 5 Coordinate Geometry Exercise 5.2', 29),
('Chapter 5 Coordinate Geometry Exercise 5.3', 29),
('Chapter 5 Coordinate Geometry Exercise 5.4', 29),
('Chapter 5 Coordinate Geometry Exercise 5.5', 29),
('Chapter 6 Trigonometry Exercise 6.1', 30),
('Chapter 6 Trigonometry Exercise 6.2', 30),
('Chapter 6 Trigonometry Exercise 6.3', 30),
('Chapter 6 Trigonometry Exercise 6.4', 30),
('Chapter 6 Trigonometry Exercise 6.5', 30),
('Chapter 7 Mensuration Exercise 7.1', 31),
('Chapter 7 Mensuration Exercise 7.2', 31),
('Chapter 7 Mensuration Exercise 7.3', 31),
('Chapter 7 Mensuration Exercise 7.4', 31),
('Chapter 7 Mensuration Exercise 7.5', 31),
('Chapter 8 Statistics and Probability Exercise 8.1', 32),
('Chapter 8 Statistics and Probability Exercise 8.2', 32),
('Chapter 8 Statistics and Probability Exercise 8.3', 32),
('Chapter 8 Statistics and Probability Exercise 8.4', 32),
('Chapter 8 Statistics and Probability Exercise 8.5', 32);



SELECT * FROM Classes;
SELECT * FROM Subjects;
SELECT * FROM Chapters;
SELECT * FROM Exercises;
SELECT * FROM Problems;