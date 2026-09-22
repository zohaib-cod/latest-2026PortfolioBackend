const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://alizohaibweb_db_user:EnzAq5UjlLGkwG4s@cluster0.oukfdya.mongodb.net/portfolio')
  .then(() => {
    console.log("SUCCESS!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("FAIL", err);
    process.exit(1);
  });
