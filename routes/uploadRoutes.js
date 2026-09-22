const express = require('express');
const router = express.Router();
const { upload } = require('../utils/cloudinary');
const { protect, admin } = require('../middleware/auth');

router.post('/', protect, admin, upload.single('image'), (req, res) => {
  if (req.file) {
    res.json({
      url: req.file.path,
      id: req.file.filename,
    });
  } else {
    res.status(400).json({ message: 'No file uploaded' });
  }
});

module.exports = router;
