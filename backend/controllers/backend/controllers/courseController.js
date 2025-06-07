const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.status(201).json(course);
};

exports.getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

exports.enrollInCourse = async (req, res) => {
  const { userId } = req.body;
  const course = await Course.findById(req.params.courseId);
  course.enrolledUsers.push(userId);
  await course.save();
  res.json(course);
};