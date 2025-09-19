const Student = require("../models/student");
const Class = require("../models/class");

const createClass = async (req, res) => {
  try {
    const { name } = req.body;
    const newClass = await Class.create({ name });
    res.json(newClass);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getEngagement = async (req, res) => {
  try {
    const { classId } = req.query;
    const students = await Student.find({ classId });

    res.json(students.map(s => ({
      studentId: s._id,
      name: s.name,
      score: s.engagementScore
    })));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getHistory = async (req, res) => {
  try {
    const { studentId } = req.query;
    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ error: "Student not found" });

    res.json(student.history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createClass, getEngagement, getHistory };
