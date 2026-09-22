const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: { type: String, default: 'Ali Zohaib' },
  title: { type: String, default: 'Full Stack Developer' },
  subtitle: { type: String, default: 'Artificial Intelligence & Robotics Graduate' },
  bio: { type: String },
  profileImage: { type: String },
  coverImage: { type: String },
  email: { type: String },
  phone: { type: String },
  location: { type: String, default: 'Lahore, Pakistan' },
  socialLinks: {
    github: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
  },
  resumeUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Profile', ProfileSchema);
