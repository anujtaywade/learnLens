const Student = require("../models/student");
const Class = require("../models/class");
const axios = require("axios");

const joinClass = async (req, res) => {
  try {
    const { name, classId } = req.body;
    const student = await Student.create({ name, classId });

    if (classId) {
      await Class.findByIdAndUpdate(classId, { $push: { students: student._id } });
    }

    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const uploadFrame = async (req, res) => {
  try {
    const { studentId, frame } = req.body;

    // --- MOCK Score ---
    const engagementScore = Math.floor(Math.random() * 101);

    // --- Later: replace with AI service ---
    // const response = await axios.post("http://localhost:8000/analyze", { frame });
    // const engagementScore = response.data.score;

    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ error: "Student not found" });

    student.engagementScore = engagementScore;
    student.history.push({ score: engagementScore });
    await student.save();

    res.json({ success: true, score: engagementScore });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { joinClass, uploadFrame };
