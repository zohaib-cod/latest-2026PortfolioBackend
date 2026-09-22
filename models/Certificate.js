const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  issuer: { type: String, required: true },
  issueDate: { type: Date },
  certificateImage: { type: String },
  certificatePdf: { type: String },
  credentialUrl: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Certificate', CertificateSchema);
