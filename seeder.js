const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio')
  .then(() => console.log('MongoDB Connected for Seeding'))
  .catch(err => console.error(err));

const importData = async () => {
  try {
    await User.deleteMany();

    const adminUser = new User({
      name: 'Admin Zohaib',
      email: 'admin@alizohaib.com',
      password: 'adminpassword123',
      role: 'admin'
    });

    await adminUser.save();

    console.log('Admin user seeded!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  // destroyData();
} else {
  importData();
}
