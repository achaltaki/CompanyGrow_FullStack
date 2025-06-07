const User = require('../models/User');

exports.getUserAnalytics = async (req, res) => {
  const user = await User.findById(req.params.userId)
    .populate('enrolledCourses')
    .populate('assignedProjects');
  res.json({
    totalCourses: user.enrolledCourses.length,
    totalProjects: user.assignedProjects.length,
    badgeCount: user.badges.length
  });
};