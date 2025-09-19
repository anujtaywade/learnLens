const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  score: Number,
  timestamp: { type: Date, default: Date.now }
});

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
  engagementScore: { type: Number, default: 0 },
  history: [historySchema]
});

module.exports = mongoose.model("Student", studentSchema);
