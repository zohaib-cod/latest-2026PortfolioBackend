const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String }, // URL to icon or icon class
  category: { type: String },
  level: { type: Number }, // 1-100 or 1-5
  displayOrder: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Skill', SkillSchema);
