const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).json(project);
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

exports.assignUserToProject = async (req, res) => {
  const { userId } = req.body;
  const project = await Project.findById(req.params.projectId);
  project.assignedUsers.push(userId);
  await project.save();
  res.json(project);
};